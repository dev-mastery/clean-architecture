import React from 'react';
import { connect } from 'react-redux';
import { selectNavItemProps } from 'nav-item/selectors';
import NavItemTemplate from 'nav-item/template';

const CcNavItem = connect(mapStateToProps,
                          mapDispatchToProps
                        )(NavItemTemplate);

CcNavItem.propTypes = {
  label: React.PropTypes.string.isRequired,
  route: React.PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  return selectNavItemProps(state, ownProps)(state, ownProps);
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default CcNavItem;
