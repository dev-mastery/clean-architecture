using System;
using System.Collections;
using System.Collections.Generic;
using CleanCo.Common;
   
    namespace CleanCo.Tests 
    {
        public class FakeRepository<T>: IRepository<T> where T: IRecord
        {
            private static IDictionary<Guid, T> store;  

            static FakeRepository() 
            {
                store = new Dictionary<Guid, T>();
            }

            public void Delete(Guid id)
            {
                store.Remove(id);
            }
            public List<T> Find(string filter)
            {
                throw new NotImplementedException("Test me first");
            }
            public List<T> RetrieveAll()
            {
                List<T> list = new List<T>();
                foreach (T item in store.Values)
                {
                    list.Add(item);
                }
                return list;
            }
            public T RetrieveById(Guid id)
            {
                if(store.ContainsKey(id)) 
                {
                    return store[id];
                }
                else
                {
                    return default(T);
                } 
            }
            public List<T> RetrieveNext(Guid last, int max) 
            {
                throw new NotImplementedException("Test me first");
            }
            public void Save(T record)
            {
                if(store.ContainsKey(record.Id)) 
                {
                    store[record.Id] = record;
                } 
                else
                {
                    store.Add(record.Id, record);   
                }
            }
            public int RecordCount
            {
                get
                {
                    return store.Count;
                }
            }
    }
}