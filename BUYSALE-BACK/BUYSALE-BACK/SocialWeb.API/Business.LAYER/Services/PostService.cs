﻿using Business.LAYER.Services.Abstractions;
using DL.DB;
using DL.DB.Sevices;
using DL.Model;
using System;
using System.Globalization;
using System.Threading.Tasks;
using Transfer.LAYER.DTOs.Social.Commands;
using Transfer.LAYER.DTOs.Social.Results;
using Transfer.LAYER.Enums;

namespace Business.LAYER.Services
{
    public class PostService : IPostService
    {
        private readonly PostDBService _postDBService;
        public PostService(PostDBService postDBService)
        {
            _postDBService = postDBService;
        }

        public async Task<GetPostsResult> GetLists(GetPostsCommand posts)
        {
            var result = new GetPostsResult();
            try
            {
                //TODO Pagination 
                posts.Quantity = (posts.Quantity == 0) ? 20 : posts.Quantity;
                posts.Start = (posts.Start == 0) ? 1 : posts.Start;
                var postsModel = await _postDBService.GetPostsListAsync(posts.UserId, posts.Start, posts.Quantity);
                if (postsModel.Count == 0)
                {
                    return new GetPostsResult() { ResultStatus = Result.NotFound, ErrorMessage = "Posts not found" };
                }
                foreach (var postModel in postsModel)
                {
                    
                }
                result.ResultStatus = Result.Ok;
                result.ErrorMessage = "Quantity of posts " + postsModel.Count.ToString();
                return result;
            }
            catch(Exception ex)
            {
                return new GetPostsResult() { ResultStatus = Result.Exception, ErrorMessage = ex.Message };
            }
        }

        public async Task<SetPostResult> SetPost(SetPostCommand post)
        {
            try
            {
                if (String.IsNullOrEmpty(post.TextContent))
                {
                    return new SetPostResult() { ErrorMessage = "Message can't be empty", ResultStatus = Result.Empty };
                }
                var postModel = new PostModel()
                {
                    Id = Guid.NewGuid().ToString(),
                    PostContent = post.TextContent,
                    AuthorId = post.AuthorId,
                    UserId = post.UserId,
                    CreateOn = DateTime.ParseExact(post.CreateOn, "yyyy-MM-dd HH:mm", CultureInfo.InvariantCulture)
                };
                await _postDBService.CreateAsync(postModel);
                return new SetPostResult() { PostId = postModel.Id, ResultStatus = Result.Ok};
            }
            catch(Exception ex)
            {
                return new SetPostResult() { ErrorMessage = ex.Message, ResultStatus = Result.Exception };
            }
        }

        
    }
}