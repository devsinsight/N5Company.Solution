using MediatR;
using N5Company.Security.Repository.Models;
using System.ComponentModel.DataAnnotations;

namespace N5Company.Security.API.Models
{
    public class UpdatePermissionCommand : IRequest
    {
        [Required]
        public int Id { get; set; }

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
