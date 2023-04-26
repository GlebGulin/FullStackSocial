using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER.DTOs.Social
{
    public class GalleryDTO : BaseDto
    {
        public List<string> Images     { get; set; }
        public int          TotalCount { get; set; }
        public int          Count      { get; set; }
        public GalleryDTO()
        {
            Images = new List<string>();
        }
    }
}
