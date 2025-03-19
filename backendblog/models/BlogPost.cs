using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BackendBlog.Models;

public class BlogPost {

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("author")]
    public string Author { get; set; } = "mr. rock";

    [BsonElement("title")]
    [Required]
    public string Title { get; set; } = null!;

    [BsonElement("body")]
    [Required]
    public string Body { get; set; } = null!;


    [BsonElement("dateCreated")]
    public DateTime PublishedDate { get; set; } = DateTime.UtcNow;

    [BsonElement("dateLastEdited")]
    public DateTime? LastEdited { get; set; }
}