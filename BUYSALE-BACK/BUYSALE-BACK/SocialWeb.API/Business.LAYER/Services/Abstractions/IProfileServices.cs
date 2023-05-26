using System.Threading.Tasks;
using Transfer.LAYER.DTOs.Social.Commands;
using Transfer.LAYER.DTOs.Social.Results;

namespace Business.LAYER.Services.Abstractions
{
    public interface IProfileServices
    {
        Task<GetProfileResult> GetProfile(GetProfileCommand profile);
        Task<GetProfileResult> GetProfileByUserId(string userId);
        Task<SetProfileResult> SetProfile(SetProfileCommand profile);
        Task<GetGalleryResult> GetMyGallery();
        Task<FollowUnfollowResult> FollowUnfollow(FollowUnfollowCommand follow);
    }
}
