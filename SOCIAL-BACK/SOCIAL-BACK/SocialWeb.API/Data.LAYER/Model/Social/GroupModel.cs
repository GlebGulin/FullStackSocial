using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.LAYER.Model
{
    public class GroupModel
    {
        public string Id            { get; set; }
        public string Name          { get; set; }
        public string Description   { get; set; }
        public string PrevievImages { get; set; }
        public int    UsersCount    { get; set; }
    }
}
