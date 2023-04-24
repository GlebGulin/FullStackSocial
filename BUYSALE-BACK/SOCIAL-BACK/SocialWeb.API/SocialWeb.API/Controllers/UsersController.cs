using Business.LAYER.Services.Abstractions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Transfer.LAYER;

namespace SocialWeb.API.Controllers
{
    [Route("users")]
    //[ApiController]
    public class UsersController : Controller
    {
        private readonly IUsersService _usersService;
        public UsersController(IUsersService usersService)
        {
            _usersService = usersService;
        }

        [HttpGet]
        public async Task<UsersDTO> GetUsers()
        {
            var result = await _usersService.GetUsers();
            return result;
        }
    }
}
