using Business.LAYER.Services.Abstractions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Transfer.LAYER;
using Transfer.LAYER.DTOs.Social.Commands;

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
        public async Task<UsersDTO> GetUsers([FromQuery] UsersCommand users)
        {
            if (users.Limit == 0)
                users.Limit = 10;
            if (users.Page == 0)
                users.Page = 1;
            var result = await _usersService.GetUsers(users);
            return result;
        }

        [HttpGet]
        public async Task
    }
}
