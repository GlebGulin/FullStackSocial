using System.Threading.Tasks;
using Transfer.LAYER.DTOs.Social.Commands;
using Transfer.LAYER.DTOs.Social.Results;

namespace Business.LAYER.Services.Abstractions
{
    public interface IPostService
    {
        Task<SetPostResult> SetPost(SetPostCommand post);
        Task<GetPostsResult> GetLists(GetPostsCommand posts);
    }
}
