using Microsoft.EntityFrameworkCore;
using N5Company.Security.Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace N5Company.Security.Repository
{
    public class SecurityContext : DbContext
    {
        public SecurityContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<PermissionType> PermissionTypes { get; set; }
        public DbSet<Permission> Permissions { get; set; }
    }
}
