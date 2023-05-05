using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER.DTOs.Social.Commands
{
    public class GetPostsCommand : BaseCommand
    {
        public int    Start    { get; set; }
        public int    Quantity { get; set; }
        public string UserId   { get; set;  }
    }
}
