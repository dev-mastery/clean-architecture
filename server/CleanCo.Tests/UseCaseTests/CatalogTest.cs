using System;
using Xunit;
using CleanCo.Ecomm;
using CleanCo.Products;

namespace CleanCo.Tests
{
    public class CatalogTests
    {
        private Catalog testCatalog = new Catalog(new FakeRepository<Product>());
        [Fact]
        public void Should_Disallow_Products_With_Same_Name()
        {
            Product productA = new Product("same");
            Product productB = new Product("same");
            testCatalog.AddProduct(productA);
            Assert.Throws<ArgumentOutOfRangeException>(() => testCatalog.AddProduct(productB));
        }
    }
}