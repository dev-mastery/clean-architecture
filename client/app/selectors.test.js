/**
 * DevMastery Note: This is mostly code from React-boilerplate.
 * Not much was changed here. More info at:
 * https://github.com/mxstbr/react-boilerplate
**/


import { fromJS } from 'immutable';
import expect from 'expect';

import { selectLocationState } from 'selectors';

describe('selectLocationState', () => {
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null,
    });
    const mockedState = fromJS({
      route,
    });
    expect(selectLocationState()(mockedState)).toEqual(route.toJS());
  });
});
