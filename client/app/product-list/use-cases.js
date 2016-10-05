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
  const shortDescription = !!product.description ? // eslint-disable-line no-extra-boolean-cast
                            `${product.description.split(' ')
                                                  .slice(0, 10)
                                                  .join(' ')}
                                                  ...` :
                              null;
  const price = product.price.toLocaleString(
                                  'en-US',
                                  { style: 'currency', currency: 'USD' }
                                );
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

  newList.forEach((product, index) => {
    areEqual = (product.id === newList[index].id);
  });

  return areEqual;
}

function validateApi(api, method) {
  if (!api || !api[method]) {
    throw new Error('invalid api');
  }
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
