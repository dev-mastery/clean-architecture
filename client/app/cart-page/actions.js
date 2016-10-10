/**
 * React-redux uses a command pattern (http://www.blackwasp.co.uk/Command.aspx)
 * We issue commands via objects that describe them.
**/

import { ADD_TO_CART } from 'cart-page/action-types';

// all commands must have a "type".
function addToCart(productId) {
  return {
    type: ADD_TO_CART,
    payload: productId,
  };
}

export { addToCart };
