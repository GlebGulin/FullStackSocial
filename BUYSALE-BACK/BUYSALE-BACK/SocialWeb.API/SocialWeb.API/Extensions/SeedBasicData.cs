using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using SocialWeb.API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SocialWeb.API.Extensions
{
    public static class SeedBasicData
    {

        //Seed Basic Roles to DB
        public static IHost RunBasicRoles(this IHost host)
        {
            using (var scope = host.Services.CreateScope())
            {
                var logFac = scope.ServiceProvider.GetService<ILoggerFactory>();
                var basicUpload = scope.ServiceProvider.GetService<ISeedStartDataService>();

                var logger = logFac.CreateLogger("Seeding");
                logger.LogInformation("Uploading basic prices and settings started.");

                basicUpload.SeedBasicRoles().Wait();

                logger.LogInformation("Uploading basic prices finished.");
            }
            return host;
        }
    }
}
