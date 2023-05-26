using Business.LAYER.Services.Abstractions;
using DL.DB;
using DL.Model;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Transfer.LAYER.DTOs.Social.Commands;
using Transfer.LAYER.DTOs.Social.Results;
using Transfer.LAYER.Enums;

namespace Business.LAYER.Services
{
    public class ProfileServices : IProfileServices
    {
        private readonly ProfileDBService _profileDBService;
        private readonly ILogger<ProfileServices> _logger;
        public ProfileServices(ProfileDBService profileDBService,
                               ILogger<ProfileServices> logger)
        {
            _profileDBService = profileDBService;
            _logger           = logger;
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

        public async Task<GetProfileResult> GetProfileByUserId(string userId)
        {
            var prMod = new GetProfileResult();
            var prDB = await _profileDBService.GetByUserIdAsync(userId);
            if (prDB is null)
            {
                return new GetProfileResult() { ResultStatus = Result.NotFound, ErrorMessage = "User Profile not found" };
            }

            prMod.Country = prDB.Location.Country;
            prMod.City = prDB.Location.City;
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

        public async Task<FollowUnfollowResult> FollowUnfollow(FollowUnfollowCommand follow)
        {
            var result = new FollowUnfollowResult();
            _logger.LogInformation($"User with userId {follow.UserId} into follow/unfollow to profile {follow.Id}");
            try
            {
                _logger.LogInformation($"Taking profile info of profile {follow.Id}");
                var profile = await _profileDBService.GetAsync(follow.Id);
                if (profile is null)
                {
                    _logger.LogError($"Profile with id {follow.Id} was not found");
                    result.ResultStatus = Result.NotFound;
                    result.ErrorMessage = "Profile was not found";
                    return result;
                }

                if (profile.UserId.Equals(follow.UserId))
                {
                    _logger.LogError($"The user {follow.UserId} cannot subscribe to himself");
                    result.ResultStatus = Result.BadRequest;
                    result.ErrorMessage = "The user cannot subscribe to himself";
                    return result;
                }

                var userId = profile.UserId;
                var profileOwner = await _profileDBService.GetByUserIdAsync(follow.UserId);
                if (follow.Follow)
                {
                    _logger.LogInformation($"Subscribing of user {follow.UserId} to user {profile.UserId}");
                    if(String.IsNullOrEmpty(profileOwner.SubscribedToUsers.Find(x => x.Equals(profile.UserId))))
                    {
                        profileOwner.SubscribedToUsers.Add(profile.UserId);
                        await _profileDBService.UpdateAsync(profileOwner.Id, profileOwner);
                        _logger.LogInformation($"Subscribing of user {follow.UserId} to user {profile.UserId} success. All changes were saved successfull");
                    }
                    else
                    {
                        _logger.LogWarning($"User {follow.UserId} is already subscribed to the user {profile.UserId}");
                    }
                }

                else
                {
                    _logger.LogInformation($"Unfollowing of user {follow.UserId} from user {profile.UserId}");
                    var followedOwner = new List<string>();
                    foreach (var foll in profileOwner.SubscribedToUsers)
                    {
                        if (!foll.Equals(profile.UserId))
                        {
                            followedOwner.Add(foll);
                        }
                    }
                    profileOwner.SubscribedToUsers = followedOwner;
                    await _profileDBService.UpdateAsync(profileOwner.Id, profileOwner);
                    _logger.LogInformation($"Unfollowing of user {follow.UserId} from user {profile.UserId} success. All changes were saved successfull");
                }
                result.ResultStatus = Result.Ok;
                return result;
            }

            catch(Exception ex)
            {
                _logger.LogError($"Follow/Unfollow exception for user {follow.UserId} and profile {follow.Id}. Cause: {ex.Message}");
                result.ErrorMessage = ex.Message;
                result.ResultStatus = Result.Exception;
                return result;
            }
        }
    }
}
