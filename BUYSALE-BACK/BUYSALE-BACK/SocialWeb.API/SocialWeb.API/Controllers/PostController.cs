using Business.LAYER.Services.Abstractions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Transfer.LAYER.DTOs.Social.Commands;
using Transfer.LAYER.DTOs.Social.Results;

namespace SocialWeb.API.Controllers
{
    [Route("posts")]
    [ApiController]
    public class PostController : Controller
    {
        private readonly IPostService _postService;
        public PostController(IPostService postService)
        {
            _postService = postService;
        }

        //[Authorize]
        [Route("post")]
        [HttpPost]
        public async Task<SetPostResult> SetPost([FromBody] SetPostCommand post)
        {
            //TODO: get author id from userManager
            var result = await _postService.SetPost(post);
            return result;
        }
    }
}
