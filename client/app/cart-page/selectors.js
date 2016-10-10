/*
 * selectors let us take advantage of simple caching.
 * More info: https://github.com/reactjs/reselect
*/

import { createSelector } from 'reselect';
import { totalItemsInCart } from 'cart-page/use-cases';

function selectTotalItemsInCart() {
  return createSelector(
    selectCartDomain,
    (cart) => {
      if (cart) {
        return totalItemsInCart(cart);
      }
      return 0;
    }
  );
}

function selectCartDomain(state) {
  return state.get('cart').toJS();
}

export { selectTotalItemsInCart };
