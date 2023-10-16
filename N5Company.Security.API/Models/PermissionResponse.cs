using N5Company.Security.Repository.Models;

namespace N5Company.Security.API.Models
{
    public class PermissionResponse
    {
        public IEnumerable<dynamic> Permissions { get; set; }
    }
}
