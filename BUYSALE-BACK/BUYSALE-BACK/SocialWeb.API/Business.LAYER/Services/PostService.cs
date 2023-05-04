using Business.LAYER.Services.Abstractions;
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
