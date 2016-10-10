/**
 * A container is used to generate a higher order component that connects
 * a template component to the state in the redux store.
 * Containers also connect events in the template to redux actions.
 * see: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
**/

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
