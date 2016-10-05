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
