using AspNetCore.Identity.MongoDbCore.Models;
using MongoDbGenericRepository.Attributes;
using System;

namespace DL.Model.Identity
{
    [CollectionName("Users")]

    public class ApplicationUser : MongoIdentityUser<Guid>
    {

    }
}
