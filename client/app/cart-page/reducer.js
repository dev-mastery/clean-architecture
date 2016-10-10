/**
 * In Redux, the reducer is where we manage state for anything global.
 * Here, we manage the state of the cart.
 * Notice that all the business logic is actually coming from
 * our use case module.
**/

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
