using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace N5Company.Security.Repository.Models
{
    [Table("Permission")]
    public class Permission
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string NombreEmpleado { get; set; }

        [Required]
        [MaxLength(100)]
        public string ApellidoEmpleado { get; set; }

        [Required]
        [Column("TipoPermiso")]
        public int TipoPermisoId { get; set; }

        [Required]
        public DateTime FechaPermiso { get; set; }
    }
}
