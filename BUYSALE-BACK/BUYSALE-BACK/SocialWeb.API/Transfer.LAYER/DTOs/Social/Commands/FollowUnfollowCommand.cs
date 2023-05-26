using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER.DTOs.Social.Commands
{
    public class FollowUnfollowCommand : BaseCommand
    {
        public bool   Follow { get; set; }
        public string UserId { get; set; }
    }
}
