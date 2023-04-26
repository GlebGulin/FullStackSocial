using Business.LAYER.Services.Abstractions;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Transfer.LAYER;
using Transfer.LAYER.DTOs.Social;

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

        [Route("set-profile")]
        [HttpPost]
        public async Task<JsonResult> SetProfile([FromBody]ProfileDTO profile)
        {
            var result = await _profileService.SetProfile(profile);
            return Json(result);
        }

        [Route("my-gallery")]
        [HttpGet]
        public async Task<GalleryDTO> GetMyGallery()
        {
            var result = await _profileService.GetMyGallery();
            return result;
        }
    }
}
