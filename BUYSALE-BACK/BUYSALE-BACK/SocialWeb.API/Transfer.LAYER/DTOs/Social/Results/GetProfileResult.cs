using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER.DTOs.Social.Results
{
    public class GetProfileResult : BaseResult
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string AvatarImg { get; set; }
        public string Description { get; set; }
        public string UserStatus { get; set; }
        public int Age { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
    }
}
