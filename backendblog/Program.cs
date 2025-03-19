using MongoBlogSettings.Models;
using BackendBlogCRUD.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<MongoDBSettings>(builder.Configuration.GetSection("MongoDB"));
builder.Services.AddSingleton<MongoDBService>();

// Add services to the container.
builder.Services.AddControllers();

// Register CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});


var app = builder.Build();


//app.UseHttpsRedirection();

// Enable the CORS policy
app.UseCors("AllowReactApp");

app.MapControllers();

app.Run();
