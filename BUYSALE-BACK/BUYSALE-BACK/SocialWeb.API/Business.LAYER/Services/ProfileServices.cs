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
        public Task<ProfileDTO> GetProfile()
        {
            ProfileDTO profile = new ProfileDTO()
            {
                Id = Guid.NewGuid().ToString(),
                FirstName = "Test",
                LastName  = "Test"

            };
            return Task.FromResult(profile);
        }

        public Task<GalleryDTO> GetMyGallery()
        {
            throw new NotImplementedException();
        }

        public async Task<ProfileDTO> SetProfile(ProfileDTO profile)
        {
            ProfileDTO result = new ProfileDTO();
            try
            {
                var profileModel = new ProfileModel() {
                    FirstName   = profile.FirstName,
                    LastName    = profile.LastName,
                    AvatarImg   = profile.AvatarImg,
                    Description = profile.Description,
                    Id          = Guid.NewGuid().ToString()
                };

                var check = await _profileDBService.CheckExistAsync(profileModel.FirstName, profileModel.LastName);
                if (check is not null)
                {
                    result.Result = Result.Exists;
                    result.ErrorMessage = "User exists";
                    return result;
                }

                await _profileDBService.CreateAsync(profileModel);
                result.Id = profileModel.Id;
                result.Result = Result.Ok;
                return result;
            }
            catch(Exception e)
            {
                result.Result = Result.BadRequest;
                result.ErrorMessage = e.Message;
                return result;
            }
        }
    }
}
