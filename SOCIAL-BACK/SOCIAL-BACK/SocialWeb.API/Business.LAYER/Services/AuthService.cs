using Business.LAYER.Services.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Transfer.LAYER.DTOs.Social;

namespace Business.LAYER.Services
{
    public class AuthService : IAuthService
    {
        public Task<AuthKeyDto> Login(LoginDTO login)
        {
            return Task.FromResult(new AuthKeyDto() { Secret = "********", Result = Transfer.LAYER.Enums.Result.Ok});
        }
    }
}
