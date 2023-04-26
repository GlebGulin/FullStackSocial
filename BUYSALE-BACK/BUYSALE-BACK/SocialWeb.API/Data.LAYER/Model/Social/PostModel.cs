using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DL.Model
{
    public class PostModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id          { get; set; }
        [BsonElement("Name")]
        public string PostContent { get; set; }
        public string UserId      { get; set; }
        public DateTime CreateOn  { get; set; }
    }
}
