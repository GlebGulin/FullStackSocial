using Transfer.LAYER.Enums;

namespace Transfer.LAYER.DTOs.Common
{
    public class BaseResult
    {
        public Result ResultStatus { get; set; }
        public string ErrorMessage { get; set; }
    }
}
