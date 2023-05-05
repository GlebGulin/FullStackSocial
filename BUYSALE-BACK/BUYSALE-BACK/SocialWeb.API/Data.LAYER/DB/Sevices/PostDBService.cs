using DL.Model;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DL.DB.Sevices
{
    public class PostDBService 
    {
        private readonly IMongoCollection<PostModel> _postCollection;
        public PostDBService(IOptions<SocialStoreDatabaseSettings> socialStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(socialStoreDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(socialStoreDatabaseSettings.Value.DatabaseName);
            _postCollection = mongoDatabase.GetCollection<PostModel>(socialStoreDatabaseSettings.Value.PostCollectionName);
        }
        public async Task CreateAsync(PostModel post) =>
            await _postCollection.InsertOneAsync(post);

        public async Task<List<PostModel>> GetPostsListAsync(string userId, int page, int quantity) =>
            await _postCollection.Find(x =>x.UserId == userId).Limit(quantity).Skip((page - 1) * quantity).ToListAsync();
    }
}
