using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using SocialWeb.API.Extensions;
using System;

namespace SocialWeb.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //CreateHostBuilder(args).Build().Run();
            var hostBuilder = Host.CreateDefaultBuilder()
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                })
                .ConfigureLogging((hostingContext, builder) =>
                {
                    builder.AddFile($"logs/socials-{DateTime.Now.Date.ToShortDateString()}.txt", isJson: true);
                    builder.AddConsole();
                    builder.AddDebug();
                });
            hostBuilder
                .Build()
                .RunBasicRoles()
                .Run();
        }
    }
}
