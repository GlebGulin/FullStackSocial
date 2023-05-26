using Business.LAYER.Services.Abstractions;
using DL.Model.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Transfer.LAYER.DTOs.Social.Commands;
using Transfer.LAYER.DTOs.Social.Results;

namespace SocialWeb.API.Controllers
{
    [Route("users")]
    public class UsersController : Controller
    {
        private readonly IUsersService _usersService;
        private readonly IPostService _postService;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly UserManager<ApplicationUser> _userManager;
        public UsersController(IUsersService usersService, 
                               IPostService postService,
                               RoleManager<ApplicationRole> roleManager,
                               UserManager<ApplicationUser> userManager)
        {
            _usersService = usersService;
            _postService  = postService;
            _roleManager  = roleManager;
            _userManager  = userManager;
        }

        //Identity test
        [Route("create-user")]
        [HttpPost]
        public async Task<JsonResult> CreateTestUser([FromBody] AuthCommand auth)
        {
            try
            {
                ApplicationUser appUser = new ApplicationUser
                {
                    UserName = auth.Login,
                    Email = auth.Login
                };
                appUser.Id = Guid.NewGuid();
                appUser.SecurityStamp = appUser.Id.ToString();
                IdentityResult result = await _userManager.CreateAsync(appUser, auth.Password);
                await _userManager.AddToRoleAsync(appUser, "Customer");
                if (result.Succeeded)
                    return Json("Succeed");
                else
                {
                    return Json(result.Errors);
                }
            }
            catch (Exception ex)
            {
                return Json(ex.Message);
            }
        }

        [Route("create-role")]
        [HttpPost]
        public async Task<JsonResult> CreateTestrole([FromBody] AuthCommand auth)
        {
            var roleExist = await _roleManager.RoleExistsAsync(auth.Login);
            if (!roleExist)
            {
                ApplicationRole role = new ApplicationRole() { Name = auth.Login };
                //create the roles and seed them to the database: Question 1
                var roleResult = await _roleManager.CreateAsync(role);

                if (roleResult.Succeeded)
                {
                    //_logger.LogInformation(1, "Roles Added");
                    return Json(new { result = $"Role {auth.Login} added successfully" });
                }
                else
                {
                    //_logger.LogInformation(2, "Error");
                    return Json(new { error = $"Issue adding the new {auth.Login} role" });
                }
            }
            return Json(new { error = "Role already exist" });
        }


        [HttpGet]
        public async Task<UsersResult> GetUsers([FromQuery] UsersCommand users)
        {
            if (users.Limit == 0)
                users.Limit = 10;
            if (users.Page == 0)
                users.Page = 1;
            var result = await _usersService.GetUsers(users);
            return result;
        }
    }
}
