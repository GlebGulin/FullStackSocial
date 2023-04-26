using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL.Sevices
{
    public class ProfileDBService
    {
        private readonly IMongoCollection<ProfileModel> _profileCollection;
        public ProfileDBService(IOptions<SocialStoreDatabaseSettings> socialStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(socialStoreDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(socialStoreDatabaseSettings.Value.DatabaseName);
            _profileCollection = mongoDatabase.GetCollection<ProfileModel>(socialStoreDatabaseSettings.Value.UserCollectionName);
        }

        public async Task<List<ProfileModel>> GetAsync() =>
        await _profileCollection.Find(_ => true).ToListAsync();

        public async Task<ProfileModel?> GetAsync(string id) =>
            await _profileCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(ProfileModel newProfile) =>
            await _profileCollection.InsertOneAsync(newProfile);

        public async Task UpdateAsync(string id, ProfileModel updatedProfile) =>
            await _profileCollection.ReplaceOneAsync(x => x.Id == id, updatedProfile);

        public async Task RemoveAsync(string id) =>
            await _profileCollection.DeleteOneAsync(x => x.Id == id);
    }
}
