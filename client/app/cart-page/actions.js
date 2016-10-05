import { ADD_TO_CART } from 'cart-page/action-types';

function addToCart(productId) {
  return {
    type: ADD_TO_CART,
    payload: productId,
  };
}

export { addToCart };
