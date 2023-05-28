using System.Threading.Tasks;
using Transfer.LAYER;
using Transfer.LAYER.DTOs.Social.Commands;
using Transfer.LAYER.DTOs.Social.Results;

namespace Business.LAYER.Services.Abstractions
{
    public interface IUsersService
    {
        Task<UsersResult> GetUsers(UsersCommand users);
        Task<UsersResult> GetUsersWithoutOwner(UsersCommand users, string userId);
    }
}
