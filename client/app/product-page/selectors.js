import { createSelector } from 'reselect';
import * as api from 'api';
import {
  selectProducts,
  getProductById,
  filterProductsById,
  formatProduct,
  }
from 'product-list';

export { selectProductProps };

function selectProductProps(state, ownProps) {
  return createSelector(
    selectProduct(state, ownProps),
    selectProductImage(state, ownProps),
    (product, image) => {
      if (!product) return ownProps;
      const selectedImage = image || product.primaryImage;
      return { ...product, selectedImage };
    }
  );
}

function selectProduct(_, ownProps) {
  return createSelector(
    selectProducts,
    (products) => {
      const id = ownProps.params ? ownProps.params.id : null;
      if (products && (products.length > 0) && id) {
        return formatProduct(filterProductsById(products, id)[0]);
      }
      return null;
    }
  );
}

function selectProductImage() {
  return createSelector(
    selectCurrentProduct,
    (product) => product.selectedImage || null,
  );
}

function selectCurrentProduct(state) {
  return state.toJS().currentProduct;
}
