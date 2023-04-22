using Business.LAYER.Services.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Transfer.LAYER;

namespace Business.LAYER.Services
{
    public class UsersService : IUsersService
    {
        public Task<UsersDTO> GetUsers()
        {
            var result = new UsersDTO();
            result.Users.Add(new UserDTO() { 
                Id = Guid.NewGuid().ToString(),
                Name = "Random Random",
                City = "Ganalulu",
                Country = "USA",
                Age = 30,
                UserStatus = "I am ready",
                Avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vUGJbHBga3qsvjGZWxzdc96vD8fQcIGOC7KBzjBLh5IALmDHRaKA75551Q-ps4n0mho&usqp=CAU",
                Followed = true
            });

            result.Users.Add(new UserDTO()
            {
                Id = Guid.NewGuid().ToString(),
                Name = "Request Request",
                City = "Ottawa",
                Country = "Canada",
                Age = 31,
                UserStatus = "Write me",
                Avatar = "https://ru.pinterest.com/pin/410953534731183468/",
                Followed = true
            });

            result.Users.Add(new UserDTO()
            {
                Id = Guid.NewGuid().ToString(),
                Name = "Test Test",
                City = "Paris",
                Country = "France",
                Age = 25,
                UserStatus = "Write me",
                Avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkp4ZzGLLZGWGlXGoEi6aV3RqUYhENHpw7cg&usqp=CAU",
                Followed = false
            });
            result.Users.Add(new UserDTO()
            {
                Id = Guid.NewGuid().ToString(),
                Name = "Ken Winston",
                City = "London",
                Country = "Great Britain",
                Age = 25,
                UserStatus = "Don't lie me",
                Avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSMNW3CsSQlkFnyG9t8XKGRQqvkyZcfN2xlQ&usqp=CAU",
                Followed = true
            });
            result.Users.Add(new UserDTO()
            {
                Id = Guid.NewGuid().ToString(),
                Name = "Henk Moody",
                City = "London",
                Country = "Great Britain",
                Age = 66,
                UserStatus = "Come to me",
                Avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_0tC2JK7KJWfUzN8TDLVeooEIMMH41Vrxw&usqp=CAU",
                Followed = false
            });
            return Task.FromResult(result);
        }
    }
}
