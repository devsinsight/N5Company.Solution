using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace N5Company.Security.Repository.Models
{
    [Table("PermissionType")]
    public class PermissionType
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(500)]
        public required string Description { get; set; }
    }

}
