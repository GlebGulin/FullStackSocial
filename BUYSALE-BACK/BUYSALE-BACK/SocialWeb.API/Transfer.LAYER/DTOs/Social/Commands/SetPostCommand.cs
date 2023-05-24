using Transfer.LAYER.DTOs.Common;
using Transfer.LAYER.Enums;

namespace Transfer.LAYER.DTOs.Social.Commands
{
    public class SetPostCommand : BaseCommand
    {
        public string ProfileId    { get; set; }
        public string UserId       { get; set; }
        public string AuthorId     { get; set; }
        public string TextContent  { get; set; }
        public string CreateOn     { get; set; }
    }
}
