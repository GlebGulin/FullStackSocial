using System.Threading.Tasks;
using Transfer.LAYER;
using Transfer.LAYER.DTOs.Social.Commands;

namespace Business.LAYER.Services.Abstractions
{
    public interface IUsersService
    {
        Task<UsersDTO> GetUsers(UsersCommand users);
    }
}
