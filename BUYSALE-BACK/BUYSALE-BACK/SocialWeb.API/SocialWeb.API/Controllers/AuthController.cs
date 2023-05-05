using Business.LAYER.Services.Abstractions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

using Transfer.LAYER.DTOs.Social;
using Transfer.LAYER.DTOs.Social.Commands;
using Transfer.LAYER.DTOs.Social.Results;

namespace SocialWeb.API.Controllers
{
    [Route("auth")]
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [AllowAnonymous]
        [Route("login")]
        [HttpPost]
        public async Task<AuthResult> Login([FromBody]AuthCommand login)
        {
            var result = await _authService.Login(login);
            return result;
        }
    }
}
