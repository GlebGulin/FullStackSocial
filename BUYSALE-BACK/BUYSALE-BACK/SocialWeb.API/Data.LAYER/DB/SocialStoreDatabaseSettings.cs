using System;

namespace DL.DB
{
    public class SocialStoreDatabaseSettings
    {
        public string ConnectionString      { get; set; } = null!;

        public string DatabaseName          { get; set; } = null!;

        public string UserCollectionName    { get; set; } = null!;
        public string ProfileCollectionName { get; set; } = null!;
        public string PostCollectionName    { get; set; } = null!;
    }
}
