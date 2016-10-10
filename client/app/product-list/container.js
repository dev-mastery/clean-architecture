/**
 * A container is used to generate a higher order component that connects
 * a template component to the state in the redux store.
 * Containers also connect events in the template to redux actions.
 * see: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
**/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productsLoaded } from 'product-list/actions';
import { selectProductListProps } from 'product-list/selectors';
import { sameProducts, listProducts } from 'product-list/use-cases';
import * as api from 'api';
import CcProductListTemplate from 'product-list/template';

/**
 * Extending or inheriting from a base class supplied by a third party framework
 * is a terrible thing to do. We should strive to avoid this at all costs.
 * It tightly binds our code to the framework and will cause great pain in the
 * future as the frameworks change and/or need to be replaced. Not clean!!
 *
 * We are doing it here in order to gain access to React's component lifecycle
 * hooks (mount and update).
 *
 * Notice that the real business logic is still happening in our use cases.
 * Keeping the logic seperate protects us from this
 * terrible practice and keeps our architecture relatively clean.
**/
class CcProductList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    this.fetchData(prevProps.products);
  }

  fetchData(oldList) {
    const newList = this.props.products;
    const callBack = this.props.onProductsLoaded;
    if (
        !oldList ||
        (!!oldList && !sameProducts(oldList, newList))
      ) {
      listProducts(api).then((products) => {
        callBack(products);
      });
    }
  }

  render() {
    return <CcProductListTemplate {...this.props} />;
  }
}

CcProductList.propTypes = {
  onProductsLoaded: React.PropTypes.func,
  products: React.PropTypes.array,
};

/**
 * we quickly replace our CcProductList higher-order-component (HOC) with a
 * connected version. Watch Dan Abramov's free course on idiomatic React-Redux
 * for more information about this technique:
 * https://egghead.io/courses/building-react-applications-with-idiomatic-redux
 * see lesson 14 in particular
**/
CcProductList = connect( // eslint-disable-line no-class-assign
                      mapStateToProps,
                      { onProductsLoaded: productsLoaded }
                    )(CcProductList);

function mapStateToProps(state) {
  return selectProductListProps(state);
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onProductsLoaded: (products) => dispatch(productsLoaded(products)),
//   };
// }

export default CcProductList;
