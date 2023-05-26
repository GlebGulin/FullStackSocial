using Business.LAYER.Services;
using Business.LAYER.Services.Abstractions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Transfer.LAYER;
using Transfer.LAYER.DTOs.Social;
using Transfer.LAYER.DTOs.Social.Commands;
using Transfer.LAYER.DTOs.Social.Results;

namespace SocialWeb.API.Controllers
{
    [Route("profile")]
    public class ProfileController : Controller
    {
        private readonly IProfileServices _profileService;
        private readonly IPostService _postService;
        public ProfileController(IProfileServices profileServices, IPostService postService)
        {
            _profileService = profileServices;
            _postService    = postService;
        }

        [Route("get-profile")]
        [HttpGet]
        public async Task<GetProfileResult> GetProfile([FromQuery] GetProfileCommand profile)
        {
            var result = await _profileService.GetProfile(profile);
            return result;
        }

        [Authorize(Roles = "Customer")]
        [Route("my-profile")]
        [HttpGet]
        public async Task<GetProfileResult> MyProfile([FromQuery] GetProfileCommand profile)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var result = await _profileService.GetProfileByUserId(userId);
            return result;
        }

        [Route("set-profile")]
        [HttpPost]
        public async Task<SetProfileResult> SetProfile([FromBody] SetProfileCommand profile)
        {
            var result = await _profileService.SetProfile(profile);
            return result;
        }

        [Route("my-gallery")]
        [HttpGet]
        public async Task<GetGalleryResult> GetMyGallery()
        {
            var result = await _profileService.GetMyGallery();
            return result;
        }
    }
}
