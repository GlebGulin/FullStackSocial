using System.Collections.Generic;

namespace DL.Model
{
    public class ProfileModel
    {
        public string Id                      { get; set; }
        public string UserId                  { get; set; }
        public string FirstName               { get; set; }
        public string LastName                { get; set; }
        public string UserStatus              { get; set; }
        public string Description             { get; set; }
        public int    Age                     { get; set; }
        public Location Location              { get; set; }
        public Avatar Avatar                  { get; set; }  
        public List<string> SubscribedToUsers { get; set; }
        public List<string> SubscribedToGroup { get; set; }
        public ProfileModel()
        {
            Location = new Location();
            Avatar   = new Avatar();
            SubscribedToUsers = new List<string>();
            SubscribedToGroup = new List<string>();
        }
    }

    public class Location
    {
        public string City    { get; set; }
        public string Country { get; set; }
    }

    public class Avatar
    {
        public string Large   { get; set; }
        public string Small   { get; set; }
    }
}
