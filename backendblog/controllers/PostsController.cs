using Microsoft.AspNetCore.Mvc;
using BackendBlogCRUD.Services;
using BackendBlog.Models;

namespace BackendBlog.Controllers;


[ApiController]
[Route("api/[controller]")]
public class PostController: Controller {
    
    private readonly MongoDBService _mongoDBService;
    public PostController(MongoDBService mongoDBService) {
        _mongoDBService = mongoDBService;
    }
    [HttpGet]
    public async Task<List<BlogPost>> Get() {
        return await _mongoDBService.GetAsync();
    }
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] BlogPost post) {
        await _mongoDBService.CreateAsync(post);
        return CreatedAtAction(nameof(Get), new { id = post.Id }, post);
    }
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateBlog(string id, [FromBody] string body) {
        await _mongoDBService.UpdatePost(id, body);
        return NoContent();
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id) {
        await _mongoDBService.DeleteAsync(id);
        return NoContent();
    }
}