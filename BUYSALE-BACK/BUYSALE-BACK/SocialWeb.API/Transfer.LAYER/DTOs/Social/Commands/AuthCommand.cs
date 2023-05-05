using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER.DTOs.Social.Commands
{
    public class AuthCommand : BaseCommand
    {
        public string Login { get; set; }
        public string Password { get; set; }
    }
}
