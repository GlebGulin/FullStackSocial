using Business.LAYER.Services.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Transfer.LAYER;

namespace Business.LAYER.Services
{
    public class ProfileServices : IProfileServices
    {
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

        public Task SaveProfile(ProfileDTO profile)
        {
            throw new NotImplementedException();
        }
    }
}
