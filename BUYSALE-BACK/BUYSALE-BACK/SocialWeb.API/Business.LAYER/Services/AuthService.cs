using Business.LAYER.Services.Abstractions;
using Data.LAYER.Model.Global;
using DL.Model.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Transfer.LAYER.DTOs.Social;
using Transfer.LAYER.DTOs.Social.Commands;
using Transfer.LAYER.DTOs.Social.Results;
using Transfer.LAYER.Enums;

namespace Business.LAYER.Services
{
    public class AuthService : IAuthService
    {
        private List<UserModel> _users = new List<UserModel>
        {
            new UserModel { Id = 1, Username = "admin", Password = "admin" }
        };

        private readonly GlobalSettings _globalSettings;
        public AuthService(IOptions<GlobalSettings> globalSettings)
        {
            _globalSettings = globalSettings.Value;
        }
        public Task<AuthResult> Login(AuthCommand login)
        {
            var result = new AuthResult();
            try
            {
                var user = _users.SingleOrDefault(x => x.Username == login.Login && x.Password == login.Password);
                if (user == null)
                    return null;
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_globalSettings.Secret);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(7),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                result.Token = tokenHandler.WriteToken(token);
                result.ResultStatus = Result.Ok;
                return Task.FromResult(result);
            }
            catch(Exception ex)
            {
                return Task.FromResult(new AuthResult() { ErrorMessage = ex.Message, ResultStatus = Result.Exception });
            }
        }
    }
}
