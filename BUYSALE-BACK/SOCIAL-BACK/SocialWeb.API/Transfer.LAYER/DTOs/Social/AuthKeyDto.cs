using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER.DTOs.Social
{
    public class AuthKeyDto : BaseDto
    {
        public string Secret { get; set; }
    }
}
