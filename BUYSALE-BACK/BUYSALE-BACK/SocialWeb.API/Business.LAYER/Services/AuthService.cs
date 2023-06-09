﻿using Business.LAYER.Services.Abstractions;
using Data.LAYER.Model.Global;
using DL.Model.Identity;
using DL.Notifications.Email;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Transfer.LAYER;
using Transfer.LAYER.DTOs.Social.Commands;
using Transfer.LAYER.DTOs.Social.Results;
using Transfer.LAYER.Enums;

namespace Business.LAYER.Services
{
    public class AuthService : IAuthService
    {
        private readonly RoleManager<ApplicationRole>   _roleManager;
        private readonly IEmailService                  _emailService;
        private readonly UserManager<ApplicationUser>   _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly GlobalSettings                 _globalSettings;
        private readonly ILogger<AuthService>           _logger;
        private readonly IProfileServices               _profileService;

        public AuthService(IOptions<GlobalSettings>       globalSettings,
                           RoleManager<ApplicationRole>   roleManager,
                           UserManager<ApplicationUser>   userManager,
                           SignInManager<ApplicationUser> signInManager,
                           ILogger<AuthService>           logger,
                           IEmailService                  emailService,
                           IProfileServices               profileService)
        {
            _globalSettings = globalSettings.Value;
            _roleManager    = roleManager;
            _userManager    = userManager;
            _signInManager  = signInManager;
            _logger         = logger;
            _profileService = profileService;
            _emailService   = emailService;
        }

        public async Task<CheckAuthResult> CheckAuth(CheckAuthCommand check)
        {
            var result = new CheckAuthResult();
            _logger.LogInformation($"AuthService. Checking auth of user {check.UserId}");
            try
            {
                var user = await _userManager.FindByIdAsync(check.UserId);
                if (user is null)
                {
                    _logger.LogError($"AuthService. Failed auth of user {check.UserId}. {Constants.UserNotFound}");
                    result.ResultStatus = Result.NotFound;
                    result.ErrorMessage = Constants.UserNotFound;
                    return result;
                }
                result.UserId = user.Id.ToString();
                result.ResultStatus = Result.Ok;
                result.UserName = user.NormalizedUserName;
                return result;
            }
            catch(Exception ex)
            {
                _logger.LogError($"AuthService. Exception to auth for user {check.UserId}");
                result.ErrorMessage = ex.Message;
                result.ResultStatus = Result.Exception;
                return result;
            }
        }

        public async Task<AuthResult> Login(AuthCommand login)
        {
            _logger.LogInformation($"Login of user {login.Login}");
            var result = new AuthResult();
            try
            {
                var userExists = await _signInManager.PasswordSignInAsync(login.Login,
                           login.Password, true, lockoutOnFailure: true);
                if (!userExists.Succeeded)
                    return new AuthResult() { ErrorMessage = "User is not registered", ResultStatus = Result.NotRegisteredUser  };
                var user = await _userManager.FindByEmailAsync(login.Login);
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_globalSettings.Secret);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.Name, user.UserName),
                        new Claim(ClaimTypes.Email, login.Login),
                        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                        new Claim(ClaimTypes.Role, PlatformRoles.Customer.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(7),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                result.Token = tokenHandler.WriteToken(token);
                result.Email = user.Email;
                result.Login = user.NormalizedUserName;
                result.Id    = user.Id.ToString();
                result.UserId = user.Id.ToString();
                result.ResultStatus = Result.Ok;
                _logger.LogInformation($"Success login of user {login.Login}");
                return result;
            }
            catch(Exception ex)
            {
                _logger.LogError($"Failed of user's login {login.Login}. Cause: {ex.Message}");
                return new AuthResult() { ErrorMessage = ex.Message, ResultStatus = Result.Exception };
            }
        }

        public async Task<RegisterResult> Registration(RegisterCommand regist)
        {
            var result = new RegisterResult();
            try
            {
                //Create User
                ApplicationUser appUser = new ApplicationUser
                {
                    UserName = regist.Email,
                    Email    = regist.Email
                };
                appUser.Id = Guid.NewGuid();
                appUser.SecurityStamp = appUser.Id.ToString();
                IdentityResult resultIdentity = await _userManager.CreateAsync(appUser, regist.Password);
                await _userManager.AddToRoleAsync(appUser, PlatformRoles.Customer.ToString());
                if (!resultIdentity.Succeeded)
                {
                    _logger.LogError($"Unsuccessful registration attempt for a user {regist.Email}");
                    foreach (var error in resultIdentity.Errors)
                    {
                        _logger.LogError($"{regist.Email} Code Error: {error.Code}, Description Error: {error.Description}");
                        result.AdditionalErrors.Add(String.Format("{0} {1}", error.Code, error.Description));
                    }
                    result.ResultStatus = Result.RegistrationError;
                    return result;
                }

                SetProfileCommand profileCommand = new SetProfileCommand()
                {
                     UserId    = appUser.Id.ToString(),
                     AvatarImg = regist.Avatar,
                     FirstName = regist.FirstName,
                     LastName  = regist.LastName,
                     City      = regist.City,
                     Country   = regist.Country,
                };

                var profile = await _profileService.SetProfile(profileCommand);
                if (profile.ResultStatus != Result.Ok)
                {
                    _logger.LogError($"Profile creation error during user registration for {regist.Email}. Cause: {profile.ErrorMessage}");
                    result.ErrorMessage = profile.ErrorMessage;
                    result.ResultStatus = profile.ResultStatus;
                    await _userManager.DeleteAsync(appUser);
                    return result;
                }
                var message = "<div><img src='https://platy.sk/c/images/cms/2021/09/making_money_online_cover.png' style='width:60%;'/></div>" + 
                    "<div><p style='color:#D2691E; size: 200%;'>" + "Hello, dear " + profileCommand.FirstName + ". You have successfully registered on our BuySale platform." + "</p></div>";
                await _emailService.SendEmailCustomerRegistAsync(regist.Email, "BuySale Welcome", message);
                result.ResultStatus = Result.Ok;
                return result;
            }
            catch(Exception ex)
            {
                _logger.LogError($"Regisstration Exception for user {regist.Email}. Cause: {ex.Message}");
                result.ResultStatus = Result.RegistrationError;
                result.ErrorMessage = ex.Message;
                return result;
            }
        }
    }
}
