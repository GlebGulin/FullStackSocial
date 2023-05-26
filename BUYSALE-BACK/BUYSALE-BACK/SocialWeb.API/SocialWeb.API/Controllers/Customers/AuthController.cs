using Business.LAYER.Services.Abstractions;
using DL.Model.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;
using Transfer.LAYER.DTOs.Social.Commands;
using Transfer.LAYER.DTOs.Social.Results;

namespace SocialWeb.API.Controllers
{
    [Route("auth")]
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;
        private readonly RoleManager<ApplicationRole>   _roleManager;
        private readonly UserManager<ApplicationUser>   _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        public AuthController(IAuthService authService, 
                              RoleManager<ApplicationRole>   roleManager,
                              UserManager<ApplicationUser>   userManager,
                              SignInManager<ApplicationUser> signInManager)
        {
            _authService   = authService;
            _roleManager   = roleManager;
            _userManager   = userManager;
            _signInManager = signInManager;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("login")]
        public async Task<AuthResult> Login([FromBody] AuthCommand login)
        {
            var signIn = await _signInManager.PasswordSignInAsync(login.Login,
                           login.Password, true, lockoutOnFailure: true);

            var signRes = signIn;
            var result = await _authService.Login(login);
            return result;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("registration")]
        public async Task<RegisterResult> Registration([FromBody] RegisterCommand command)
        {
            var result = await _authService.Registration(command);
            return result;
        }

        [Authorize(Roles = "Customer")]
        [HttpGet]
        [Route("check-auth")]
        public async Task<CheckAuthResult> CheckAuth([FromQuery] CheckAuthCommand command)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            command.UserId = userId;
            var result = await _authService.CheckAuth(command);
            return result;
        }

        [Authorize(Roles = "Customer")]
        [HttpGet]
        [Route("test-get-user")]
        public async Task<JsonResult> GetTestUser()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var user = await _userManager.FindByIdAsync(userId);

            return Json(user);
        }
    }
}
