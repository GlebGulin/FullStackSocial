using System;
using System.Collections.Generic;
using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER.DTOs.Social
{
    public class PostDTO : BaseDto
    {
        public string Id { get; set; }
        public string PostContent { get; set; }
        public string UserId { get; set; }
        public string AuthorId { get; set; }
        public DateTime CreateOn { get; set; }
        public List<string> MoviesContent { get; set; }
        public List<string> PhotosContent { get; set; }
        public PostDTO()
        {
            MoviesContent = new List<string>();
            PhotosContent = new List<string>();
        }
    }
}
