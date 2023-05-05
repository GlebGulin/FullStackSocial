using System.Collections.Generic;
using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER.DTOs.Social.Results
{
    public class GetGalleryResult : BaseResult
    {
        public List<string> Images { get; set; }
        public int TotalCount { get; set; }
        public int Count { get; set; }
        public GetGalleryResult()
        {
            Images = new List<string>();
        }
    }
}
