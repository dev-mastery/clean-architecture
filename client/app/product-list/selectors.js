import { createSelector } from 'reselect';
import { formatProductList } from 'product-list/use-cases';
import CcSpinner from 'spinner';

export { selectProductListProps, selectRowClass, selectProducts };

function selectProductListProps() {
  return createSelector(
    selectSpinner(),
    selectProducts,
    (spinner, products) => ({
      spinner,
      products: formatProductList(products),
    })
  );
}

function selectRowClass() {
  return createSelector(
    (idx) => idx,
    (index) => ((index !== 0 && (index) % 3 === 0) ? 'row' : ''),
  );
}

function selectSpinner() {
  return createSelector(
          selectProducts,
          (products) => ((products.length === 0) ? new CcSpinner() : null)
        );
}

function selectProducts(state) {
  return state.toJS().productList ? state.toJS().productList.products : [];
}
