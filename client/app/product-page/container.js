/**
 * A container is used to generate a higher order component that connects
 * a template component to the state in the redux store.
 * Containers also connect events in the template to redux actions.
 * see: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
**/

import React, { Component } from 'react';
import { getProductById } from 'product-list/use-cases';
import * as api from 'api';
import CcProductTemplate from 'product-page/template';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectProductProps } from 'product-page/selectors';
import { setImage } from 'product-page/actions';
import { productsLoaded } from 'product-list';
import { addToCart } from 'cart-page';

/**
 * Extending or inheriting from a base class supplied by a third party framework
 * is a terrible thing to do. We should strive to avoid this at all costs.
 * It tightly binds our code to the framework and will cause great pain in the
 * future as frameworks change and/or need to be replaced. Not clean!!
 *
 * We are doing it here in order to gain access to React's component lifecycle
 * hooks (mount and update).
 *
 * Notice that the real business logic is still happening in our use cases.
 * Keeping the logic seperate protects us from this
 * terrible practice and keeps our architecture relatively clean.
**/
class CcProductPage extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    this.fetchData(prevProps);
  }

  fetchData(oldProps) {
    const callback = this.props.onProductLoaded;
    const noId = !this.props.id;
    const oldPropsExist = !!oldProps;
    const gotNewId = oldPropsExist && this.props.id !== oldProps.id;

    if (noId || (oldPropsExist && gotNewId)) {
      getProductById(api, this.props.params.id)
        .then((product) => callback(product));
    }
  }

  render() {
    return <CcProductTemplate {...this.props} />;
  }
}

CcProductPage.propTypes = {
  onProductLoaded: React.PropTypes.func,
  id: React.PropTypes.string,
  params: React.PropTypes.object,
};

/**
 * we quickly replace our CcProductPage higher-order-component (HOC) with a
 * connected version. Watch Dan Abramov's free course on idiomatic React-Redux
 * for more information about this technique:
 * https://egghead.io/courses/building-react-applications-with-idiomatic-redux
 * see lesson 14 in particular
**/
CcProductPage = withRouter( // eslint-disable-line no-class-assign
                        connect(
                          mapStateToProps,
                          mapDispatchToProps
                        )(CcProductPage)
                      );

function mapStateToProps(state, ownProps) {
  return selectProductProps(state, ownProps);
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onAddToCart: () => dispatch(addToCart(ownProps.params.id)),
    // Notice how we destructure the event object passed into onImageClick below?
    // More info at:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    onImageClick: ({ target: img }) => dispatch(setImage(img.src)),
    onProductLoaded: (product) => dispatch(productsLoaded([product])),
  };
}

export default CcProductPage;
