import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectProductProps } from 'product-page/selectors';
import createProductRoute from 'product-page/route';
import { setImage } from 'product-page/actions';
import CcProductContainer from 'product-page/container';
import { productsLoaded } from 'product-list';
import { addToCart } from 'cart-page';


const CcProductPage = withRouter(
                        connect(
                          mapStateToProps,
                          mapDispatchToProps
                        )(CcProductContainer)
                      );

function mapStateToProps(state, ownProps) {
  return selectProductProps(state, ownProps);
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onAddToCart: () => dispatch(addToCart(ownProps.params.id)),
    onImageClick: (evt) => dispatch(setImage(evt.target.src)),
    onProductLoaded: (product) => dispatch(productsLoaded([product])),
  };
}

export default CcProductPage;
export { createProductRoute, setImage };
