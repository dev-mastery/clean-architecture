import { PRODUCTS_LOADED } from 'product-list/action-types';

export function productsLoaded(products) {
  return {
    type: PRODUCTS_LOADED,
    payload: products,
  };
}
