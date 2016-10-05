using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

using CleanCo.RepoAdapter;
using CleanCo.Products;
using CleanCo.Common;
using CleanCo.Ecomm;

using Microsoft.AspNetCore.Mvc;

namespace CleanCo.Ecomm.RestAdapter
{
    [Route("api/[controller]")]
    public class CatalogController : Controller
    {
        // GET api/catalog
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            Catalog catalog;
            IRepository<Product> repo;

            repo = new Repository<Product>();
            catalog = new Catalog(repo);
            return (IEnumerable<Product>)catalog.GetProducts();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            Catalog catalog;
            IRepository<Product> repo;
            Product product;

            repo = new Repository<Product>();
            catalog = new Catalog(repo);

            product = (Product)catalog.GetProductById(Guid.Parse(id));
            if(product == null) 
            {
                return NotFound();
            }
            return new ObjectResult(product);           
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
