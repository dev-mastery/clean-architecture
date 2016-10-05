import { connect } from 'react-redux';
import CcNavTemplate from 'nav/template';
// import { selectTotalItemsInCart } from 'cart-page';
import { totalItemsInCart } from 'cart-page/use-cases';

const CcNav = connect(mapStateToProps, mapDispatchToProps)(CcNavTemplate);

function mapStateToProps(state) {
  let num;
  if (!state) {
    num = 0;
  } else {
    num = totalItemsInCart(state.get('cart').toJS());
  }
  return {
    itemsInCart: num,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default CcNav;
