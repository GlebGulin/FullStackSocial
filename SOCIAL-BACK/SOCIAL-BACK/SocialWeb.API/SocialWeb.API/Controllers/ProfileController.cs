using Business.LAYER.Services.Abstractions;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SocialWeb.API.Controllers
{
    [Route("profile")]
    public class ProfileController : Controller
    {
        private readonly IProfileServices _profileService;
        public ProfileController(IProfileServices profileServices)
        {
            _profileService = profileServices;
        }

        [Route("get-profile")]
        [HttpGet]
        public async Task<JsonResult> GetProfile()
        {
            var result = await _profileService.GetProfile();
            return Json(result);
        }

        [Route("my-post")]
        [HttpGet]
        public async Task<JsonResult> GetMyPosts()
        {

        }
    }
}
