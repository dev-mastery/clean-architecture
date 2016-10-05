using System;
using System.Collections;
using System.Collections.Generic;

namespace CleanCo.Common 
{
    public interface IRepository<T> 
    {
        List<T> RetrieveAll();
        List<T> Find(string filter);
        T RetrieveById(Guid id);
        void Save(T record);
        void Delete(Guid id);
        int RecordCount{ get; }
    }
}