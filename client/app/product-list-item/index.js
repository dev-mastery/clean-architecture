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
