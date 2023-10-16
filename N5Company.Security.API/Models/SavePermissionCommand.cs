using MediatR;
using System.ComponentModel.DataAnnotations;

namespace N5Company.Security.API.Models
{
    public class SavePermissionCommand : IRequest
    {
        [Required]
        [MaxLength(100)]
        public string NombreEmpleado { get; set; }

        [Required]
        [MaxLength(100)]
        public string ApellidoEmpleado { get; set; }

        [Required]
        public int TipoPermisoId { get; set; }

        [Required]
        public DateTime FechaPermiso { get; set; }
    }
}
