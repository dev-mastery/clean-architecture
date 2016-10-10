import expect from 'expect';
import {
  filterProductsById,
  formatProduct,
  formatProductList,
  sameProducts,
} from 'product-list/use-cases';

describe('product-list', () =>
  it('should format a product', () => {
    const dummyProduct = makeDummyProduct();
    isProductFormatted(dummyProduct);
  }),

  it('should format a list of products', () => {
    const productList = makeDummyProductList();
    formatProductList(productList);
    productList.forEach((product) => isProductFormatted(product));
  }),

  it('should compare products', () => {
    const firstProducts = makeDummyProductList();
    const secondProducts = makeDummyProductList();
    const same = sameProducts(firstProducts, firstProducts);
    const different = sameProducts(firstProducts, secondProducts);
    expect(same).toBe(true);
    expect(different).toBe(false);
  }),

  it('should filter products by id', () => {
    const productList = makeDummyProductList();
    const filteredProducts = filterProductsById(productList, productList[0].id);
    expect(filteredProducts[0].id).toBe(productList[0].id);
  })
);

function makeDummyProductList() {
  const productList = [];
  for (let i = 0; i < 3; i++) {
    productList.push(makeDummyProduct());
  }
  return productList;
}

function makeDummyProduct() {
  return {
    id: Math.floor((Math.random() * 10000) + 1),
    price: 6.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                 'Cras finibus ligula et lectus luctus condimentum. ' +
                 'Aenean rutrum purus ut lacus.',
  };
}

function isProductFormatted(product) {
  const formattedProduct = formatProduct(product);
  const short = formattedProduct.shortDescription;
  const price = formattedProduct.price;

  expect(formattedProduct).toIncludeKey('shortDescription');
  expect(short).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                     'Cras finibus ...');
  expect(price).toBeA('string')
               .toMatch(/(\$)(\d*)(.)(\d*)/);
}
