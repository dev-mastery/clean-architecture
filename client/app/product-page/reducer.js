/**
 * In Redux, the reducer is where we manage state for anything global.
 * Here, we manage the state of the product page.
 *
 * We don't hold a product id in state here because it already exists in the
 * route branch of the state. So, all that's left to track is the selected image.
**/

import { fromJS } from 'immutable';
import { SET_IMAGE } from 'product-page/action-types';
import currentProductState from 'product-page/state';

const initialState = fromJS(currentProductState);

function currentProductReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IMAGE:
      return state.set('selectedImage', action.payload.image);
    default:
      return state;
  }
}

export default currentProductReducer;
