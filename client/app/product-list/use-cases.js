import { validateApi } from 'utils/use-case-helper';

export {
  filterProductsById,
  formatProduct,
  formatProductList,
  getProductById,
  listProducts,
  sameProducts,
};

function formatProduct(product) {
  validateProduct(product);
  // isValidDescription keeps eslint calm and happy.
  // http://eslint.org/docs/rules/no-extra-boolean-cast
  const isValidDescription = !!product.description;
  const description = isValidDescription && product.description;
  const shortDescription = isValidDescription ?
                           description.split(' ') // eslint-disable-line prefer-template
                                      .slice(0, 10)
                                      .join(' ') +
                                      ' ...' : null;
  const price = product.price.toLocaleString('en-US',
                                            { style: 'currency', currency: 'USD' });

  const images = product.additionalImages ?
                  product.additionalImages.concat([product.primaryImage]) :
                  [].concat([product.primaryImage]);

  return { ...product, shortDescription, price, images };
}

function formatProductList(products) {
  validateProductList(products);
  return (products.length > 0) ?
          products.map(formatProduct) :
          [];
}

function filterProductsById(products, id) {
  validateProductList(products);
  return products.filter((product) => product.id === id);
}

function getProductById(api, id) {
  validateApi(api, 'getProductById');
  return api.getProductById(id);
}

function listProducts(api) {
  validateApi(api, 'getProducts');
  return api.getProducts();
}

function sameProducts(oldList, newList) {
  let areEqual = false;

  validateProductList(oldList);
  validateProductList(newList);

  if (oldList.length !== newList.length) {
    return false;
  }

  oldList.forEach((product, index) => {
    areEqual = (product.id === newList[index].id);
  });

  return areEqual;
}

function validateProduct(product) {
  if (!product || !product.id || !product.price) {
    throw new Error('invalid product');
  }
}

function validateProductList(list) {
  if (!(Array.isArray(list)) ||
      (!(list.length === 0) &&
      !(list[0].id))) {
    throw new Error('invalid product list');
  }
}
