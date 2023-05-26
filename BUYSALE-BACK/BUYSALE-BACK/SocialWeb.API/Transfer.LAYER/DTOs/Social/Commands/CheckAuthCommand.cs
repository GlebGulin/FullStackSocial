using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER.DTOs.Social.Commands
{
    public class CheckAuthCommand : BaseCommand
    {
        public string UserId { get; set; }
    }
}
