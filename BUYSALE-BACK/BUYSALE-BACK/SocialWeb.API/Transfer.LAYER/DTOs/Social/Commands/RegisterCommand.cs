using Transfer.LAYER.DTOs.Common;

namespace Transfer.LAYER.DTOs.Social.Commands
{
    public class RegisterCommand : BaseCommand
    {
        public string Email     { get; set; }
        public string Password  { get; set; }
        public string FirstName { get; set; }
        public string LastName  { get; set; }
        public string Country   { get; set; }
        public string City      { get; set; }
        public string Born      { get; set; }
        public string Avatar    { get; set; }
    }
}
