﻿using Business.LAYER.Services.Abstractions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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

        [Route("post")]
        [HttpPost]
        public async Task<SetPostResult> SetPost([FromBody] SetPostCommand post)
        {
            //TODO: get author id from userManager
            var result = await _postService.SetPost(post);
            return result;
        }

        [Authorize(Roles = "Customer")]
        [Route("post-auth")]
        [HttpPost]
        public async Task<SetPostResult> SetPostAsRegistered([FromBody] SetPostCommand post)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            post.AuthorId = userId;
            var result = await _postService.SetPostAsRegistered(post);
            return result;
        }

        [Route("posts")]
        [HttpGet]
        public async Task<GetPostsResult> GetPosts([FromQuery] GetPostsCommand post)
        {
            if (String.IsNullOrEmpty(post.UserId))
            {
                //TODO : UserId From userManager
                post.UserId = "f119e9b7-1125-4809-a157-ddaae54831b1";
            }
            var result = await _postService.GetLists(post);
            return result;
        }

        [Authorize(Roles = "Customer")]
        [Route("posts-auth")]
        [HttpGet]
        public async Task<GetPostsResult> GetPostsAsRegistered([FromQuery] GetPostsCommand post)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (String.IsNullOrEmpty(post.UserId))
            {
                post.UserId = userId;
            }
            var result = await _postService.GetLists(post);
            return result;
        }
    }
}
