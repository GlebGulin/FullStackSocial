using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Transfer.LAYER.DTOs.Social;

namespace Business.LAYER.Services.Abstractions
{
    public interface IAuthService
    {
        Task<AuthKeyDto> Login(LoginDTO login);
    }
}
