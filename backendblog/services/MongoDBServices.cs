using MongoBlogSettings.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Bson;
using BackendBlog.Models;
using Microsoft.AspNetCore.Routing.Internal;

namespace BackendBlogCRUD.Services;

public class MongoDBService {
    private readonly IMongoCollection<BlogPost> _blogsCollection;

        public MongoDBService(IOptions<MongoDBSettings> mongoDBSettings) {
            MongoClient client = new MongoClient(mongoDBSettings.Value.ConnectionURI);
            IMongoDatabase database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
            _blogsCollection = database.GetCollection<BlogPost>(mongoDBSettings.Value.CollectionName);
        }

        public async Task<List<BlogPost>> GetAsync() {
            return await _blogsCollection.Find(new BsonDocument()).ToListAsync();
        }
        public async Task CreateAsync(BlogPost post) {
            await _blogsCollection.InsertOneAsync(post);
        }
        public async Task UpdatePost(string id, string body) {
            FilterDefinition<BlogPost> filter = Builders<BlogPost>.Filter.Eq("Id", id);
            UpdateDefinition<BlogPost> update = Builders<BlogPost>.Update.Combine(
                Builders<BlogPost>.Update.Set("body", body),
                Builders<BlogPost>.Update.Set("LastEdited", DateTime.UtcNow)
            );
            await _blogsCollection.UpdateOneAsync(filter, update);
            return;
        }
        public async Task DeleteAsync(string id) {
            FilterDefinition<BlogPost> filter = Builders<BlogPost>.Filter.Eq("Id", id);
            await _blogsCollection.DeleteOneAsync(filter);
            return;
        }
}