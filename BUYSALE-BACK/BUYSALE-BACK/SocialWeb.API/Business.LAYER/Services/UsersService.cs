using Business.LAYER.Services.Abstractions;
using DL.DB;
using System;
using System.Threading.Tasks;
using Transfer.LAYER;
using Transfer.LAYER.DTOs.Social.Commands;
using Transfer.LAYER.DTOs.Social.Results;

namespace Business.LAYER.Services
{
    public class UsersService : IUsersService
    {
        private readonly ProfileDBService _profileDBService;
        public UsersService(ProfileDBService profileDBService)
        {
            _profileDBService = profileDBService;
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
    }
}
