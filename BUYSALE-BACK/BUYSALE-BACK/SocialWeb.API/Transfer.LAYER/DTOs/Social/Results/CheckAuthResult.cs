using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER.DTOs.Social.Results
{
    public class CheckAuthResult : BaseResult
    {
        public string UserName { get; set; }
        public string UserId   { get; set; }
    }
}
