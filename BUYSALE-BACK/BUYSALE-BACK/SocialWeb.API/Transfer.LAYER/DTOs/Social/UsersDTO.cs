using System.Collections.Generic;
using Transfer.LAYER.DTOs.Common;
using Transfer.LAYER.DTOs.Social;

namespace Transfer.LAYER
{
    public class UsersDTO : BaseDto
    {
        public List<UserDTO> Users { get; set; }
        public int       PageCount { get; set; }
        public int      TotalCount { get; set; }
        public UsersDTO()
        {
            Users = new List<UserDTO>();
        }
    }
    public class UserDTO : BaseDto
    {
        public string Id         { get; set; }
        public string Name       { get; set; }
        public string Avatar     { get; set; }
        public string City       { get; set; }
        public string Country    { get; set; }
        public string UserStatus { get; set; }
        public int    Age        { get; set; }
        public bool   Followed   { get; set; }
        public List<PostDTO> Posts { get; set; }
        public UserDTO()
        {
            Posts = new List<PostDTO>();
        }
    }

}
