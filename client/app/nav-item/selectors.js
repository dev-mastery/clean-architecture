import { createSelector } from 'reselect';
import { setItemCssClass } from 'nav-item/use-cases';

function selectNavItemProps(state, ownProps) {
  return createSelector(selectCurrentPath,
    (path) => ({
      ...ownProps,
      className: setItemCssClass(path, ownProps.route),
    }));
}

function selectCurrentPath(state) {
  return state.toJS().route.locationBeforeTransitions.pathname;
}


export { selectNavItemProps };
