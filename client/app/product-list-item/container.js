/**
 * A container is used to generate a higher order component that connects
 * a template component to the state in the redux store.
 * Containers also connect events in the template to redux actions.
 * see: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
**/

import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { setImage } from 'product-page';
import CcProductListItemTemplate from 'product-list-item/template';

const CcProductListItem = connect(
                            mapStateToProps,
                            mapDispatchToProps
                          )(CcProductListItemTemplate);

CcProductListItem.propTypes = {
  price: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
};

function mapStateToProps(_, ownProps) {
  return ownProps;
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClickProduct: () => clickProduct(dispatch, ownProps),
  };
}

function clickProduct(dispatch, ownProps) {
  dispatch(setImage(ownProps.primaryImage));
  browserHistory.push(`/product/${ownProps.id}`);
}

export default CcProductListItem;
