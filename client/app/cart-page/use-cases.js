/**
 * The use case encapsulates the business logic and should be
 * free of dependencies. Along with the Entities, this is the
 * heart and sould of our app.
**/

import { validateApi } from 'utils/use-case-helper';

// one could argue that this belongs with product list
function addProductToCart(api, id) {
  validateApi(api, 'addToCart');
  api.addToCart(id);
}

function getCartProducts(api) {
  validateApi(api, 'getCart');
  return api.getCart();
}

function totalItemsInCart(items) {
  // const below avoids eslint warning:
  // http://eslint.org/docs/rules/no-extra-boolean-cast
  const itemsValid = !!items;
  if (itemsValid) {
    return items.reduce(
      (prev, curr) => prev + curr.qty,
      0
    );
  }
  return 0;
}

export { addProductToCart, getCartProducts, totalItemsInCart };
