import { connect } from 'react-redux';

import { productsLoaded } from 'product-list/actions';
import { filterProductsById, getProductById, formatProduct } from 'product-list/use-cases';
import { selectProductListProps, selectRowClass, selectProducts } from 'product-list/selectors';
import CcProductListContainer from 'product-list/container';

const CcProductList = connect(
                      mapStateToProps,
                      mapDispatchToProps
                    )(CcProductListContainer);

export default CcProductList;
export {
  selectProducts,
  filterProductsById,
  getProductById,
  formatProduct,
  productsLoaded,
};

function mapStateToProps(state) {
  return selectProductListProps(state);
}

function mapDispatchToProps(dispatch) {
  return {
    onProductsLoaded: (products) => dispatch(productsLoaded(products)),
    setRowClass: selectRowClass,
  };
}
