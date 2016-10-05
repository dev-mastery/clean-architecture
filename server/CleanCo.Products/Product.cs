using System;
using System.Collections.Generic;
using CleanCo.Common;

namespace CleanCo.Products
{
    public class Product : IRecord
    {
        private Guid id;
        private decimal price;

        public Product(string name, Guid id = new Guid())
        {
            validateName(name);
            
            this.Name = name.Trim();
            this.Id = (id == Guid.Empty) ? Guid.NewGuid() : id;

        }

        private void validateName(string name) 
        {
            if(name == null) 
            {
                throw new ArgumentNullException("name can not be null");
            }

            if(String.IsNullOrEmpty(name.Trim())) 
            {
                throw new ArgumentException("name can not be empty");
            }
        }

        private void validatePrice(decimal price) 
        {
            if(price < 0.00m) 
            {
                throw new ArgumentOutOfRangeException("price must be greater than 0");
            }
        }

        private void validateId(Guid id) 
        {
            if(id == Guid.Empty) 
            {
                throw new ArgumentException("id can not be an empty Guid");
            }
        }

        public Guid Id 
        { 
            get { return id; } 
            set
            {
                validateId(value);
                id = value;
            }
        }
        
        public string Name { get; }
        
        public decimal Price 
        { 
            get
            {
                return price;
            } 
            set
            {
                validatePrice(value);
                price = value;
            } 
        }
        public string Description { get; set; }
        public Uri PrimaryImage { get; set; }
        public List<Uri> AdditionalImages { get; set; }
        public Dictionary<string, List<string>> Attributes { get; set; }
    }
}