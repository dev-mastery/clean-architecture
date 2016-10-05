import { fromJS } from 'immutable';
import { ADD_TO_CART } from 'cart-page/action-types';
import { addProductToCart, getCartProducts } from 'cart-page/use-cases';
import * as api from 'api';

const initialState = immutableCart();

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      addProductToCart(api, action.payload);
      return immutableCart();
    default:
      return state;
  }
}

function immutableCart() {
  return fromJS(getCartProducts(api));
}

export default cartReducer;
