using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Transfer.LAYER.Enums
{
    public enum ProductEnums
    {
        Pending = 0,
        Active,
        Rejected
    }

    public enum Result
    {
        Ok = 0,
        BadRequest, 
        NotFound,
        Exists,
        Empty,
        Exception
    }

    public enum PostType
    {
        FromMe = 0,
        FromFriend
    }
}
