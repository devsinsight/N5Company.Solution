using MediatR;
using N5Company.Security.API.Models;
using N5Company.Security.Kafka;
using N5Company.Security.Repository;
using N5Company.Security.Repository.Models;
using Nest;
using ES = N5Company.Security.Elasticsearch;

namespace N5Company.Security.API.Services
{
    public class PermissionService : 
        IRequestHandler<PermissionRequest, PermissionResponse>,
        IRequestHandler<SavePermissionCommand>,
        IRequestHandler<UpdatePermissionCommand>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly Repository.IRepository<Permission> _repository;

        public PermissionService(IUnitOfWork unitOfWork, Repository.IRepository<Permission> repository)
        {
            _repository = repository;
            _unitOfWork = unitOfWork;
        }

        public async Task<PermissionResponse> Handle(PermissionRequest request, CancellationToken cancellationToken)
        {
            var connectionSettings = new ConnectionSettings(new Uri("http://localhost:9200"));
            var client = new ElasticClient(connectionSettings);
            var elasticsearch = new ES.Elasticsearch(client, "permission");
            var result = await elasticsearch.GetAll<dynamic>();

            await N5CompanyBroker.SendOperation("Get");

            if(result == null) return new PermissionResponse();

            return new PermissionResponse
            {
                Permissions = result
                                .GroupBy(item => item["Id"])
                                .Select(g => g.Last())
            };
        }

        public async Task Handle(SavePermissionCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var permission = new Permission
                {
                    ApellidoEmpleado = request.ApellidoEmpleado,
                    NombreEmpleado = request.NombreEmpleado,
                    TipoPermisoId = request.TipoPermisoId,
                    FechaPermiso = request.FechaPermiso
                };

                await _repository.AddAsync(permission);

                await _unitOfWork.SaveAsync();

                await N5CompanyBroker.SendOperation("Add");
                await N5CompanyBroker.SendEvent(permission);
            }
            catch (Exception e)
            {

                throw;
            }
            
           
        }

        public async Task Handle(UpdatePermissionCommand request, CancellationToken cancellationToken)
        {
            var permission = await _repository.GetByIdAsync(request.Id);

            permission.ApellidoEmpleado = request.ApellidoEmpleado;
            permission.NombreEmpleado = request.NombreEmpleado;
            permission.TipoPermisoId = request.TipoPermisoId;
            permission.FechaPermiso = request.FechaPermiso;

            await _repository.UpdateAsync(permission);

            await _unitOfWork.SaveAsync();

            await N5CompanyBroker.SendOperation("Modify");
            await N5CompanyBroker.SendEvent(permission);
        }
    }
}
