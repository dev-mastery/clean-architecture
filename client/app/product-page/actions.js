/**
 * React-redux uses a command pattern (http://www.blackwasp.co.uk/Command.aspx)
 * We issue commands via objects that describe them.
**/
import { SET_IMAGE } from 'product-page/action-types';

export {
  setImage,
};

function setImage(image) {
  return {
    type: SET_IMAGE,
    payload: {
      image,
    },
  };
}
