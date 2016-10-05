import React, { Component } from 'react';
import { getProductById } from 'product-list/use-cases';
import * as api from 'api';
import CcProductTemplate from 'product-page/template';

class CcProductContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    this.fetchData(prevProps);
  }

  fetchData(oldProps) {
    const callback = this.props.onProductLoaded;
    if (!this.props.id) {
      getProductById(api, this.props.params.id)
        .then((product) => callback(product));
    }
  }

  render() {
    return <CcProductTemplate {...this.props} />;
  }
}
//
// CcProductContainer.propTypes = {
//
// };

export default CcProductContainer;
