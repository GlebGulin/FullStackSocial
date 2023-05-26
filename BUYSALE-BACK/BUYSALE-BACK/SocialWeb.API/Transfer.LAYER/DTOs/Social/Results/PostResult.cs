using System;
using System.Collections.Generic;
using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER.DTOs.Social.Results
{
    public class PostResult : BaseResult
    {
        public string PostContent { get; set; }
        public string UserId { get; set; }
        public string AuthorId { get; set; }
        public DateTime CreateOn { get; set; }
        public List<string> MoviesContent { get; set; }
        public List<string> PhotosContent { get; set; }
        public PostResult()
        {
            MoviesContent = new List<string>();
            PhotosContent = new List<string>();
        }
    }
}
