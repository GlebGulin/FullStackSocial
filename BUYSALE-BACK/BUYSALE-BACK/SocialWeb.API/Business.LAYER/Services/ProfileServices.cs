using Business.LAYER.Services.Abstractions;
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
        public async Task<GetProfileResult> GetProfile(GetProfileCommand profile)
        {
            var prMod = new GetProfileResult();
            //TODO: Check Id by userManager
            if (String.IsNullOrEmpty(profile.Id))
            {

                prMod.Id = Guid.NewGuid().ToString();
                prMod.FirstName = "Test";
                prMod.LastName = "Test";
                prMod.Description = "TODO UserManager";
                return prMod;
            }
            var prDB = await _profileDBService.GetAsync(profile.Id);
            if(prDB is null)
            {
                return new GetProfileResult() { ResultStatus = Result.NotFound, ErrorMessage = "User Profile not found" };
            }

            prMod.Country = prDB.Location.Country;
            prMod.City    = prDB.Location.City;
            prMod.FirstName = prDB.FirstName;
            prMod.LastName = prDB.LastName;
            prMod.UserStatus = prDB.UserStatus;
            prMod.Description = prDB.Description;
            prMod.Age = prDB.Age;
            prMod.AvatarImg = prDB.Avatar.Large;

            return prMod;
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
                    UserStatus  = profile.UserStatus,
                    UserId      = profile.UserId
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
