using DL.Model.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using Transfer.LAYER.Enums;

namespace SocialWeb.API.Services
{
    public class SeedStartDataService : ISeedStartDataService
    {
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly ILogger<SeedStartDataService> _logger;
        public SeedStartDataService(RoleManager<ApplicationRole> roleManager,
                                    ILogger<SeedStartDataService> logger)
        {
            _roleManager = roleManager;
            _logger      = logger;
        }
        public async Task SeedBasicRoles()
        {
            _logger.LogInformation("Seeding basic roles");
            foreach(var role in Enum.GetValues(typeof(PlatformRoles)))
            {
                if(!await _roleManager.RoleExistsAsync(role.ToString()))
                {
                    _logger.LogInformation($"Role with name {role} doesn't exist, and will be created");
                    try
                    {
                        ApplicationRole roleObj = new ApplicationRole() { Name = role.ToString() };
                        var roleResult = await _roleManager.CreateAsync(roleObj);
                        if (roleResult.Succeeded)
                        {
                            _logger.LogInformation($"Role {role} added successful");
                            continue;
                        }
                        else
                        {
                            _logger.LogError($"Role {role} was not added");
                            continue;
                        }
                    }
                    catch(Exception ex)
                    {
                        _logger.LogError($"Fail to create role {role}. Cause: {ex.Message}");
                        continue;
                    }
                }
            }
        }
    }
}
