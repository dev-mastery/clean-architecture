/**
 * Generally an index.js file should simply provide an index of public methods
 * and modules. This is a good way to signal to consumers of this feature code
 * which elements are meant to be referenced and used and which ones are for
 * internal use only. Of course, nothing stops code from reaching deeper into
 * the hierarchy and referencing internal modules, but this way, those imports
 * will stand out because they have to be more explicit and we can easily find
 * and fix them later.
 **/

import { productsLoaded } from 'product-list/actions';
import { filterProductsById, getProductById, formatProduct } from 'product-list/use-cases';
import { selectProducts } from 'product-list/selectors';
import CcProductList from 'product-list/container';

export default CcProductList;
export {
  selectProducts,
  filterProductsById,
  getProductById,
  formatProduct,
  productsLoaded,
};
