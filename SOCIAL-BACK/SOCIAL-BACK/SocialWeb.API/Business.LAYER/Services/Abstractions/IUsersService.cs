using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Transfer.LAYER;

namespace Business.LAYER.Services.Abstractions
{
    public interface IUsersService
    {
        Task<UsersDTO> GetUsers();
    }
}
