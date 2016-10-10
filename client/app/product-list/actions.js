/**
 * React-redux uses a command pattern (http://www.blackwasp.co.uk/Command.aspx)
 * We issue commands via objects that describe them.
**/

import { PRODUCTS_LOADED } from 'product-list/action-types';

export function productsLoaded(products) {
  return {
    type: PRODUCTS_LOADED,
    payload: products,
  };
}
