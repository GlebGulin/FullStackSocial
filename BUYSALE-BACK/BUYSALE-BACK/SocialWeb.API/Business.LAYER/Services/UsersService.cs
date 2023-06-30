using Business.LAYER.Services.Abstractions;
using DL.DB;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading.Tasks;
using Transfer.LAYER;
using Transfer.LAYER.DTOs.Social.Commands;
using Transfer.LAYER.DTOs.Social.Results;

namespace Business.LAYER.Services
{
    public class UsersService : IUsersService
    {
        private readonly ProfileDBService      _profileDBService;
        private readonly ILogger<UsersService> _logger;
        public UsersService(ProfileDBService      profileDBService,
                            ILogger<UsersService> logger)
        {
            _profileDBService = profileDBService;
            _logger = logger;
        }

        public async Task<UsersResult> GetUsers(UsersCommand users)
        {
            var result = new UsersResult();
            
            long total = await _profileDBService.GetTotalQuantityAsync();
            double t = Convert.ToDouble(total);
            result.PageCount = (int)Math.Ceiling(t/(users.Limit));
            var res = await _profileDBService.GetPartDataAsync(users.Page, users.Limit);
            foreach (var model in res)
            {
                result.Users.Add(new UserResult() {
                    Id = model.Id,
                    Name = String.Format("{0} {1}", model.FirstName, model.LastName),
                    City = model.Location.City,
                    Country = model.Location.Country,
                    Age = model.Age,
                    UserStatus = "Come to me",
                    Avatar = model.Avatar.Small,
                    Followed = false
                });
            }
            result.TotalCount = (int)total;
            return result;
        }

        public async Task<UsersResult> GetUsersWithoutOwner(UsersCommand users, string userId)
        {
            _logger.LogInformation($"User {userId} is trying to get list of users");
            var result = new UsersResult();

            long total = await _profileDBService.GetTotalQuantityAsync();
            var profile = await _profileDBService.GetByUserIdAsync(userId);
            double t = Convert.ToDouble(total);
            result.PageCount = (int)Math.Ceiling((t - 1 ) / (users.Limit));
            var res = await _profileDBService.GetPartDataWithoutOwnerAsync(users.Page, users.Limit, userId);
            foreach (var model in res)
            {
                var userResult = new UserResult()
                {
                    Id = model.Id,
                    Name = String.Format("{0} {1}", model.FirstName, model.LastName),
                    City = model.Location.City,
                    Country = model.Location.Country,
                    Age = model.Age,
                    UserStatus = "Come to me",
                    Avatar = model.Avatar.Small
                };

                userResult.Followed = (profile.SubscribedToUsers.Any(x => profile.SubscribedToUsers.Contains(model.UserId))) ? true : false;

                result.Users.Add(userResult);

            }
            result.TotalCount = (int)total-1;
            return result;
        }
    }
}
