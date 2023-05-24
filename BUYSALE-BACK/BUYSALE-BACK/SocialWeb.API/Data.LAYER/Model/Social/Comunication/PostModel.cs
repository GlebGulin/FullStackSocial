using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Transfer.LAYER.Enums;

namespace DL.Model
{
    public class PostModel
    {
        public string Id                  { get; set; }
        public string PostContent         { get; set; }
        public string UserId              { get; set; }
        public string AuthorId            { get; set; }
        public DateTime CreateOn          { get; set; }
        public PostType AuthorType        { get; set; }
        public List<string> MoviesContent { get; set; }
        public List<string> PhotosContent { get; set; }
        public PostModel()
        {
            MoviesContent = new List<string>();
            PhotosContent = new List<string>();
        }
    }
}
