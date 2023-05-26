using System.Collections.Generic;
using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER.DTOs.Social.Results
{
    public class GetPostsResult : BaseResult
    {
        public List<PostResult> Posts    { get; set; }
        public int              Quantity { get; set; }
        public GetPostsResult()
        {
            Posts = new List<PostResult>();
        }
    }
}
