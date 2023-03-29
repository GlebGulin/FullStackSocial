using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER.DTOs.Social
{
    public class UserPostsDTO : BaseDto
    {
        public List<UserPostDTO> UserPots { get; set; }
    }

    public class UserPostDTO
    {
        public string Id                 { get; set; }
        public string TextContent        { get; set; }
        public string UserId             { get; set; }
        public List<MediaDTO> MediaFiles { get; set; }
    }

    public class MediaDTO
    {

    }
}
