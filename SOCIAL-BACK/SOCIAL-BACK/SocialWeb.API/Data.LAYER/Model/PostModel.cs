using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.LAYER.Model
{
    public class PostModel
    {
        public string Id          { get; set; }
        public string PostContent { get; set; }
        public string UserId      { get; set; }
        public DateTime CreateOn  { get; set; }
    }
}
