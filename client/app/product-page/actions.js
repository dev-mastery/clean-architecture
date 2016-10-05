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
