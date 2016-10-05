using System;
using System.Collections;
using System.Collections.Generic;
using CleanCo.JsonAdapter;
using CleanCo.Common;

namespace CleanCo.RepoAdapter
{
    
    public class Repository<T>: IRepository<T> where T: IRecord
    {
        private static IDictionary<Guid, string> store;  

        static Repository() 
        {
            store = new Dictionary<Guid, string>();
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
            foreach (string item in store.Values)
            {
                T itemAsT = JsonHelper<T>.FromJson(item);
                list.Add(itemAsT);
            }
            return list;
        }
        public T RetrieveById(Guid id)
        {
            validateId(id);
            if(store.ContainsKey(id)) 
            {
                string jsonRecord = store[id];
                T record = JsonHelper<T>.FromJson(jsonRecord);
                return record;
            }
            return default(T);
            
        }
        public List<T> RetrieveNext(Guid last, int max) 
        {
            throw new NotImplementedException("Test me first");
        }
        public void Save(T record)
        {
            validateRecord(record);
            if(store.ContainsKey(record.Id)) 
            {
                add(record);
            } 
            else
            {
                update(record);    
            }
        }


        private void add(T record)
        {
            string recordAsJson = JsonHelper<T>.ToJson(record);
            store.Add(record.Id, recordAsJson);
        }
        private void update(T record)
        {
            string recordAsJson = JsonHelper<T>.ToJson(record);
            store[record.Id] = recordAsJson;
        }
        private void validateRecord(T record) 
        {
            if(record == null) 
            {
                throw new ArgumentNullException("record can not be null");
            }
            validateId(record.Id);
        }
        private void validateId(Guid id) 
        {
            if(id == Guid.Empty) 
            {
                throw new ArgumentException("Id can not be empty");
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