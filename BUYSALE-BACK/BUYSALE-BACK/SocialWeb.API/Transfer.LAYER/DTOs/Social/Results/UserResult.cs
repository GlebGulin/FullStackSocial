using System.Collections.Generic;
using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER.DTOs.Social.Results
{
    public class UserResult : BaseResult
    {
        public string Id         { get; set; }
        public string Name       { get; set; }
        public string Avatar     { get; set; }
        public string City       { get; set; }
        public string Country    { get; set; }
        public string UserStatus { get; set; }
        public int    Age        { get; set; }
        public bool   Followed   { get; set; }
        public List<PostResult> Posts { get; set; }
        public UserResult()
        {
            Posts = new List<PostResult>();
        }
    }
}
