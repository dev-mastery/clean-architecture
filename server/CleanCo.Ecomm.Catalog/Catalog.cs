using System;
using System.Collections.Generic;
using CleanCo.Common;
using CleanCo.Products;

namespace CleanCo.Ecomm
{
    public class Catalog {
        
        private IRepository<Product> repo;

        // TODO: remove this when repo.Find is implemented.
        private List<string> names = new List<string>();  
        public Catalog(IRepository<Product> repo) 
        {
            if (repo == null) throw new ArgumentNullException("repo can't be null");
            this.repo = repo;
            seedRepo();
        }

        public void AddProduct(Product product) 
        {
            if(names.Contains(product.Name))
            {
                throw new ArgumentOutOfRangeException("That name already exists!");
            }
            repo.Save(product);
            // TODO: remove this when repo.Find is implemented.
            names.Add(product.Name);
        }

        public List<Product> GetProducts()
        {
            return repo.RetrieveAll();
        }

        public Product GetProductById(Guid id)
        {
            return repo.RetrieveById(id);
        }

        private void seedRepo() 
        {
            if (this.repo.RecordCount == 0) {
                Product lumberjack = new Product("Lumberjack Lather Soap");
                lumberjack.Price = 6.95m;
                lumberjack.PrimaryImage = new Uri("http://ft.b5z.net/i/u/6131027/i/ec/lumberjack_lather1.jpg");
                lumberjack.AdditionalImages = new List<Uri>();
                lumberjack.AdditionalImages.Add(new Uri("http://ft.b5z.net/zirw/805/i/u/6131027/i/ec/lumberjack_lather2.jpg"));
                lumberjack.Description = "Cedarwood, Fir Needle, Eucalyptus, Aloe, Black Spruce, Agave Root & Yellow Dock Root\n\n" +
                                          "An earthy woodsy soap with Cedarwood, Fir Needle, Eucalyptus, Aloe, Black Spruce, " +
                                          "Agave Root & Yellow Dock Root.\n\n" +
                                          "A soap that's as tough as wood. Because you want to be a lumberjack and you're ok. " +
                                          "A 2013 contest winning soap from Greg in Seattle, Washington.";
                this.AddProduct(lumberjack);

                Product matcha = new Product("Matcha Matcha Man");
                matcha.Price = 6.95m;
                matcha.PrimaryImage = new Uri("http://ft.b5z.net/i/u/6131027/i/matcha_matcha_man_1.jpg");
                matcha.AdditionalImages = new List<Uri>();
                matcha.AdditionalImages.Add(new Uri("http://ft.b5z.net/zirw/805/i/u/6131027/i/matcha_matcha_man_2.jpg"));
                matcha.Description = "Matcha Tea Powder, Willow Charcoal, French Green Clay, Jasmine, Tea Tree, Ylang Ylang & Orange\n\n" +
                "Angelica in Los Angeles, CA knows what she like in a man -- a real man, a manly man, a man who likes healthy moisturized " +
                "skin and a smooth firm bar of soap with lots of antioxidants. That's why her Matcha Matcha Man is one of our " +
                "2016 soap contest winners!";
                this.AddProduct(matcha);
                
                Product boardwalk = new Product("Boardwalk Hempire");
                boardwalk.Price = 6.95m;
                boardwalk.PrimaryImage = new Uri("http://ft.b5z.net/i/u/6131027/i/boardwalk_hempire2_1.jpg");
                boardwalk.AdditionalImages = new List<Uri>();
                boardwalk.AdditionalImages.Add(new Uri("http://soaptopia.com/i/u/6131027/i/boardwalk_hempire2_2.jpg"));
                boardwalk.Description = "A wood patchouli blend with ruby red grapefruit, lemon & hemp oil\n\n" +
                "Equally inspired by the lush green pacific slopes of Humbolt and the drum circles of Venice Beach, " +
                "this soap has a grounded, earthy scent with fresh, crisp, light notes.";
                this.AddProduct(boardwalk);
            }
        }
    }
}