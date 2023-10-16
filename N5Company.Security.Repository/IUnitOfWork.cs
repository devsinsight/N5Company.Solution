using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace N5Company.Security.Repository
{
    public interface IUnitOfWork : IDisposable
    {
        Task SaveAsync();
    }
}
