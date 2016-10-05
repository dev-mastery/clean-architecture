function addProductToCart(api, id) {
  validateApi(api, 'addToCart');
  api.addToCart(id);
}

function getCartProducts(api) {
  validateApi(api, 'getCart');
  return api.getCart();
}

function validateApi(api, method) {
  if (!api || !api[method]) {
    throw new Error('invalid api');
  }
}

function totalItemsInCart(items) {
  if (!!items) {
    return items.reduce(
      (prev, curr) => prev + curr.qty,
      0
    );
  }
  return 0;
}

export { addProductToCart, getCartProducts, totalItemsInCart };
