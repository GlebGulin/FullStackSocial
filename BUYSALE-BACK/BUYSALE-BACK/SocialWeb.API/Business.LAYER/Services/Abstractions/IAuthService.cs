﻿using System.Threading.Tasks;
using Transfer.LAYER.DTOs.Social.Commands;
using Transfer.LAYER.DTOs.Social.Results;

namespace Business.LAYER.Services.Abstractions
{
    public interface IAuthService
    {
        Task<AuthResult> Login(AuthCommand login);
        Task<RegisterResult> Registration(RegisterCommand login);
        Task<CheckAuthResult> CheckAuth(CheckAuthCommand check);
    }
}
