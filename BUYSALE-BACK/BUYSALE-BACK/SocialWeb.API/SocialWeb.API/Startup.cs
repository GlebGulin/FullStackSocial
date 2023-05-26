using Business.LAYER.Services;
using Business.LAYER.Services.Abstractions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System;
using System.Text;
using Microsoft.Extensions.Configuration;
using Data.LAYER.Model.Global;
using DL.DB;
using DL.Model.Identity;
using Microsoft.OpenApi.Models;
using DL.DB.Sevices;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Collections.Generic;
using SocialWeb.API.Services;
using Microsoft.Extensions.Logging;
using DL.Notifications.Email;

namespace SocialWeb.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<SocialStoreDatabaseSettings>(Configuration.GetSection("SocialStoreDatabase"));
            services.Configure<SMPTEmail>(Configuration.GetSection("SMPTEmail"));
            
            var mongoDBSettings2 = Configuration.GetSection("SocialStoreDatabase").Get<SocialStoreDatabaseSettings>();
            services.AddIdentity<ApplicationUser, ApplicationRole>()
                .AddMongoDbStores<ApplicationUser, ApplicationRole, Guid>
                (
                    mongoDBSettings2.ConnectionString, mongoDBSettings2.DatabaseName
                );
            services.AddControllers();
            services
               //Managers
               .AddTransient<IProfileServices, ProfileServices>()
               .AddTransient<IUsersService, UsersService>()
               .AddTransient<IPostService, PostService>()
               .AddTransient<IAuthService, AuthService>()

               //DB Services
               .AddTransient<ProfileDBService>()
               .AddTransient<PostDBService>()

               //Seed Services
               .AddTransient<ISeedStartDataService, SeedStartDataService>()

               //Notification Services
               .AddTransient<IEmailService, EmailService>();

            services.AddLogging(builder => builder.SetMinimumLevel(LogLevel.Information));

            var globalSettingsSection = Configuration.GetSection("GlobalSettings");
            services.Configure<GlobalSettings>(globalSettingsSection);
            var globalSettings = globalSettingsSection.Get<GlobalSettings>();
            
            var key = Encoding.ASCII.GetBytes(globalSettings.Secret);
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
                .AddJwtBearer(x =>
                {
                    x.RequireHttpsMetadata = false;
                    x.SaveToken = true;
                    x.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(key),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });
            //services.AddSwaggerGen();
            
            services.AddMvc();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v2", new OpenApiInfo
                {
                    Version = "v2",
                    Title = "Implement Swagger UI for project BuySale",
                    Description = "A simple example to Implement Swagger UI for project BuySale",
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(builder => builder
             .AllowAnyOrigin()
             .AllowAnyMethod()
             .AllowAnyHeader());
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger();
            app.UseSwaggerUI(c => {
                c.SwaggerEndpoint("/swagger/v2/swagger.json", "Showing API V2");
            });
            app.UseDeveloperExceptionPage();
        }
    }
}
