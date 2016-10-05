import React, { Component } from 'react';
import { listProducts, sameProducts } from 'product-list/use-cases';
import * as api from 'api';
import CcProductListTemplate from 'product-list/template';

class CcProductListContainer extends Component {
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

CcProductListContainer.propTypes = {
  onProductsLoaded: React.PropTypes.func,
  products: React.PropTypes.array,
};

export default CcProductListContainer;
