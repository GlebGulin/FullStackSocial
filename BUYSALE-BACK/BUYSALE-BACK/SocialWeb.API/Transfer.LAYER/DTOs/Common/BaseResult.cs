using System.Collections.Generic;
using Transfer.LAYER.Enums;

namespace Transfer.LAYER.DTOs.Common
{
    public class BaseResult
    {
        public string       Id               { get; set; }
        public Result       ResultStatus     { get; set; }
        public string       ErrorMessage     { get; set; }
        public List<string> AdditionalErrors { get; set; }
        public BaseResult()
        {
            AdditionalErrors = new List<string>();
        }
    }
}
