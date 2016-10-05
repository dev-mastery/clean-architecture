using System;
using System.Text.RegularExpressions;
using CleanCo.Common;

namespace CleanCo.Tests
{
    //  An IRecord implementation we can use for testing.
    public class DummyRecord: IRecord  
    {
        public DummyRecord(string name) {
            this.Id = Guid.NewGuid();
            this.Name = name;
        }
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}