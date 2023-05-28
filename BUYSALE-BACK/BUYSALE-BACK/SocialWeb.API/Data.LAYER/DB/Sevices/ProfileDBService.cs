using DL.Model;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace DL.DB
{
    public class ProfileDBService
    {
        private readonly IMongoCollection<ProfileModel> _profileCollection;
        public ProfileDBService(IOptions<SocialStoreDatabaseSettings> socialStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(socialStoreDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(socialStoreDatabaseSettings.Value.DatabaseName);
            _profileCollection = mongoDatabase.GetCollection<ProfileModel>(socialStoreDatabaseSettings.Value.ProfileCollectionName);
        }

        public async Task<List<ProfileModel>> GetAsync() =>
            await _profileCollection.Find(_ => true).ToListAsync();

        public async Task<long> GetTotalQuantityAsync() =>
            await _profileCollection.Find(_ => true).CountDocumentsAsync();

        public async Task<List<ProfileModel>> GetPartDataAsync(int page, int quantity) =>
            await _profileCollection.Find(_ => true).Limit(quantity).Skip((page-1)*quantity).ToListAsync();

        public async Task<List<ProfileModel>> GetPartDataWithoutOwnerAsync(int page, int quantity, string userId) =>
            await _profileCollection.Find(x => x.UserId != userId).Limit(quantity).Skip((page - 1) * quantity).ToListAsync();

        public async Task<ProfileModel?> GetAsync(string id) =>
            await _profileCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task<ProfileModel?> GetByUserIdAsync(string userId) =>
            await _profileCollection.Find(x => x.UserId == userId).FirstOrDefaultAsync();

        public async Task<ProfileModel?> CheckExistAsync(string firstName, string lastName) =>
            await _profileCollection.Find(x => x.FirstName == firstName && x.LastName == lastName).FirstOrDefaultAsync();

        public async Task CreateAsync(ProfileModel newProfile) =>
            await _profileCollection.InsertOneAsync(newProfile);

        public async Task UpdateAsync(string id, ProfileModel updatedProfile) =>
            await _profileCollection.ReplaceOneAsync(x => x.Id == id, updatedProfile);

        public async Task RemoveAsync(string id) =>
            await _profileCollection.DeleteOneAsync(x => x.Id == id);
    }
}
