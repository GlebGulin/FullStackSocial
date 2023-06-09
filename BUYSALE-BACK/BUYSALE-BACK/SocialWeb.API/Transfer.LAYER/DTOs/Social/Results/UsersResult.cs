﻿using System.Collections.Generic;
using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER.DTOs.Social.Results
{
    public class UsersResult : BaseResult
    {
        public List<UserResult> Users      { get; set; }
        public int              PageCount  { get; set; }
        public int              TotalCount { get; set; }
        public UsersResult()
        {
            Users = new List<UserResult>();
        }
    }
}
