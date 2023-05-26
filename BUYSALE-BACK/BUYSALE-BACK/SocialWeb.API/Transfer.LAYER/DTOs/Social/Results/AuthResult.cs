using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER.DTOs.Social.Results
{
    public class AuthResult : BaseResult
    {
        public string Token  { get; set; }
        public string UserId { get; set; }
        public string Login  { get; set; }
        public string Email  { get; set; }
    }
}
