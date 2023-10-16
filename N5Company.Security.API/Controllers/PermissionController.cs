
using MediatR;
using Microsoft.AspNetCore.Mvc;
using N5Company.Security.API.Models;

namespace N5Company.Security.API.Controllers
{
    [Route("api/v1/security")]
    [ApiController]
    public class PermissionController : Controller
    {
        private readonly IMediator _mediator;

        public PermissionController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("permissions")]
        public async Task<IActionResult> GetAll()
        {
            var results = await _mediator.Send(new PermissionRequest());

            return Ok(results);
        }

        [HttpPost("permissions")]
        public async Task<IActionResult> SavePermission(SavePermissionCommand command)
        {
            await _mediator.Send(command);

            return Ok();
        }

        [HttpPut("permissions")]
        public async Task<IActionResult> SavePermission(UpdatePermissionCommand command)
        {
            await _mediator.Send(command);

            return Ok();
        }
    }
}
