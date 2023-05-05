﻿using Business.LAYER.Services.Abstractions;
using DL.DB;
using DL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Transfer.LAYER;
using Transfer.LAYER.DTOs.Common;
using Transfer.LAYER.DTOs.Social;
using Transfer.LAYER.DTOs.Social.Commands;
using Transfer.LAYER.DTOs.Social.Results;
using Transfer.LAYER.Enums;

namespace Business.LAYER.Services
{
    public class ProfileServices : IProfileServices
    {
        private readonly ProfileDBService _profileDBService;
        public ProfileServices(ProfileDBService profileDBService)
        {
            _profileDBService = profileDBService;
        }
        public Task<GetProfileResult> GetProfile()
        {
            var profile = new GetProfileResult()
            {
                Id = Guid.NewGuid().ToString(),
                FirstName = "Test",
                LastName  = "Test"

            };
            return Task.FromResult(profile);
        }

        public Task<GetGalleryResult> GetMyGallery()
        {
            var result = new GetGalleryResult()
            {
                Images = new List<string>()
                {
                    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg"
                }
            };
            return Task.FromResult(result);
        }

        public async Task<SetProfileResult> SetProfile(SetProfileCommand profile)
        {
            var result = new SetProfileResult();
            try
            {
                var profileModel = new ProfileModel() {
                    Id = Guid.NewGuid().ToString(),
                    FirstName   = profile.FirstName,
                    LastName    = profile.LastName,
                    Description = profile.Description,
                    Age         = profile.Age,
                    UserStatus  = profile.UserStatus
                };
                profileModel.Location.City    = profile.City; 
                profileModel.Location.Country = profile.Country;
                profileModel.Avatar.Small     = profile.AvatarImg;
                profileModel.Avatar.Large     = profile.AvatarImg;

                var check = await _profileDBService.CheckExistAsync(profileModel.FirstName, profileModel.LastName);
                if (check is not null)
                {
                    result.ResultStatus = Result.Exists;
                    result.ErrorMessage = "User exists";
                    return result;
                }

                await _profileDBService.CreateAsync(profileModel);
                result.Id = profileModel.Id;
                result.ResultStatus = Result.Ok;
                return result;
            }
            catch(Exception e)
            {
                result.ResultStatus = Result.BadRequest;
                result.ErrorMessage = e.Message;
                return result;
            }
        }
    }
}
