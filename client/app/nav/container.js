/**
 * A container is used to generate a higher order component that connects
 * a template component to the state in the redux store.
 * Containers also connect events in the template to redux actions.
 * see: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
**/

import { connect } from 'react-redux';
import CcNavTemplate from 'nav/template';
import { totalItemsInCart } from 'cart-page/use-cases';

const CcNav = connect(mapStateToProps, mapDispatchToProps)(CcNavTemplate);

function mapStateToProps(state) {
  const num = (!state) ? 0 : totalItemsInCart(state.get('cart').toJS());
  return {
    itemsInCart: num,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default CcNav;
