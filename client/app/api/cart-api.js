/**
 * These are the "repo adapters" related to the shopping cart.
 * For this demo app, localStorage is used in place of a RESTful endpoint.
 *
 * The point of this module is to abstract away any details about
 * the underlying datasource. This api will be passed to the appropriate
 * use case and can be leveraged by that use case without any explicit
 * knowledge or reference to localStorage on the part of the use case.
**/

const cart = window.localStorage;

// localStorage wants a key value pair <String, String> so we store
// product id and quantity.
function addToCart(id) {
  if (cart[id]) {
    cart[id] = (Number(cart.getItem(id)) + 1);
  } else {
    cart[id] = 1;
  }
}

// I hate "for" loops, but the localStorage API is quite limited and
// time was short.
function getCart() {
  const items = [];
  for (let i = 0; i < cart.length; i++) {
    if (cart.key(i) !== 'debug') {
      items.push({
        id: cart.key(i),
        qty: Number(cart[cart.key(i)]),
      });
    }
  }
  return items;
}

export { addToCart, getCart };
