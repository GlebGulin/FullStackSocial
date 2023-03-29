using System;
using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER
{
    public class ProfileDTO : BaseDto
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string AvatarImg { get; set; }
        public string Description { get; set; }
    }
}
