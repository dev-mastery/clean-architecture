using System;
using System.Collections;
using System.Linq;
using System.Collections.Generic;
using Xunit;

using CleanCo.RepoAdapter;
using CleanCo.Common;

namespace CleanCo.Tests
{
    // see example explanation on xUnit.net website:
    // https://xunit.github.io/docs/getting-started-dotnet-core.html
    public class RepoTests
    {
        private IRepository<DummyRecord> repo = new Repository<DummyRecord>();

        [Fact]
        public void Should_Save_A_New_Entity()
        {
            DummyRecord savedRecord;
            DummyRecord dummyRecord = new DummyRecord("save me");

            repo.Save(dummyRecord);
            savedRecord = repo.RetrieveById(dummyRecord.Id);
            
            Assert.NotNull(savedRecord);
            Assert.IsType(dummyRecord.GetType(), savedRecord);
            Assert.Equal(dummyRecord.Id, savedRecord.Id);
            Assert.Equal(dummyRecord.Name, savedRecord.Name);

            repo.Delete(dummyRecord.Id);
        }

        [Fact]
        public void Should_Delete_An_Entity()
        {
            DummyRecord dummyRecord = new DummyRecord("delete me");
            DummyRecord deletedRecord;

            repo.Save(dummyRecord);
            repo.Delete(dummyRecord.Id);            
            deletedRecord = repo.RetrieveById(dummyRecord.Id);

            Assert.Null(deletedRecord);
        }

        [Fact]
        public void Should_Return_A_List_Of_Entities() 
        {
            List<DummyRecord> dummyRecords;
            DummyRecord one = new DummyRecord("One");
            DummyRecord two = new DummyRecord("Two");
            DummyRecord three = new DummyRecord("Three");
            
            List<DummyRecord> savedRecords;
            DummyRecord savedRecordOne;
            DummyRecord savedRecordTwo;
            DummyRecord savedRecordThree;
            
            dummyRecords = new List<DummyRecord>();
            dummyRecords.Add(one);
            dummyRecords.Add(two);
            dummyRecords.Add(three);
            dummyRecords.ForEach((dummyRecord) => repo.Save(dummyRecord));

            Assert.Equal(repo.RecordCount, dummyRecords.Count);

            savedRecords = repo.RetrieveAll();
            savedRecordOne = savedRecords.Find((savedRecord) => savedRecord.Id == one.Id);
            savedRecordTwo = savedRecords.Find((savedRecord) => savedRecord.Id == two.Id);
            savedRecordThree = savedRecords.Find((savedRecord) => savedRecord.Id == three.Id);

            Assert.Equal(savedRecordOne.Name, one.Name);
            Assert.Equal(savedRecordTwo.Name, two.Name);
            Assert.Equal(savedRecordThree.Name, three.Name);

            dummyRecords.ForEach((entity) => repo.Delete(entity.Id));
        }

        [Fact]
        public void Should_Return_A_Single_Entity()
        {
            DummyRecord one = new DummyRecord("One");
            repo.Save(one);
            DummyRecord saved = repo.RetrieveById(one.Id);
            Assert.Equal(saved.Id, one.Id);
            Assert.Equal(saved.Name, one.Name);
            repo.Delete(one.Id);
        }

        [Fact] 
        public void Should_Return_An_Empty_List() 
        {
            List<DummyRecord> noRecords = repo.RetrieveAll();
            Assert.NotNull(noRecords);
            Assert.Empty(noRecords);
        }
    }
}
