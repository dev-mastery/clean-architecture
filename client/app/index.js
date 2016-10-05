/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import CcHeader from './header/template';

export default class Global extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-xs-12 col-md-8 col-sm-10 col-md-offset-2 col-sm-offset-1">
            <CcHeader />
            {React.Children.toArray(this.props.children)}
          </div>
        </div>
      </div>
    );
  }
}
