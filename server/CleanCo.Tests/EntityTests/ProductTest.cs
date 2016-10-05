using System;
using Xunit;
using CleanCo.Products;

namespace CleanCo.Tests
{
    // see example explanation on xUnit.net website:
    // https://xunit.github.io/docs/getting-started-dotnet-core.html
    public class ProductTest
    {

        [Fact]
        public void Should_Automatically_Set_A_Valid_Id()
        {     
            Product testProduct = new Product("Soap");

            Assert.NotNull(testProduct.Id);
            Assert.True(testProduct.Id != Guid.Empty);
        }

        [Fact]
        public void Should_Manually_Set_A_Valid_Id()
        {    
            Guid id = Guid.NewGuid();  
            Product testProduct = new Product("Soap", id);

            Assert.Equal(id, testProduct.Id);
        }

        [Fact]
        public void Should_Throw_On_Setting_An_Invalid_Id()
        {  
            Product testProduct = new Product("Soap");
            Assert.Throws<ArgumentException>(() => testProduct.Id = Guid.Empty);
        }
        
        [Theory,
        InlineData("good"),
        InlineData("still good"),
        InlineData(" also good ")]
        public void Should_Construct_A_Valid_Product(string name)
        {
            Product testProduct = new Product(name);

            Assert.Equal(testProduct.Name, name.Trim());
        }

        [Theory,
        InlineData(""),
        InlineData(" ")]
        public void Should_Throw_On_Constructing_With_An_Empty_Name(string invalidName)
        {
            Assert.Throws<ArgumentException>(() => new Product(invalidName));
        }

        [Fact]
        public void Should_Throw_On_Constructing_With_A_Null_Name()
        {
            string nullName = null;
            Assert.Throws<ArgumentNullException>(() => new Product(nullName));
        }

        [Theory,
        InlineData(-1.99),
        InlineData(-10),
        InlineData(1-2)]
        public void Should_Throw_Setting_A_Negative_Price(decimal invalidPrice)
        {
            Product testProduct = new Product("Soap");
            Assert.Throws<ArgumentOutOfRangeException>(() => testProduct.Price = invalidPrice);
        }

    }
}
