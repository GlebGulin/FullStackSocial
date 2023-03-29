using Business.LAYER.Services;
using Business.LAYER.Services.Abstractions;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Transfer.LAYER.DTOs.Social;

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

        [Route("login")]
        [HttpPost]
        public async Task<JsonResult> Login([FromBody]LoginDTO login)
        {
            var result = await _authService.Login(login);
            return Json(result);
        }
    }
}
