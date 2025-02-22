// Controllers/PostsController.cs
using Microsoft.AspNetCore.Mvc;
using BlogBackend.Models;
using System.Collections.Generic;

[ApiController]
[Route("api/[controller]")]
public class PostsController : ControllerBase
{
    // Temporary in-memory list for demo purposes
    private static List<Post> posts = new List<Post>();

    [HttpGet]
    public IActionResult GetPosts()
    {
        return Ok(posts);
    }

    [HttpPost]
    public IActionResult CreatePost([FromBody] Post newPost)
    {
        newPost.Id = posts.Count + 1;
        newPost.CreatedAt = DateTime.UtcNow;
        posts.Add(newPost);
        return CreatedAtAction(nameof(GetPosts), new { id = newPost.Id }, newPost);
    }
}
