import CcCartTemplate from 'cart-page/template';
import createCartRoute from 'cart-page/route';
import { addToCart } from 'cart-page/actions';
import { selectTotalItemsInCart } from 'cart-page/selectors';

export default CcCartTemplate;
export { createCartRoute, addToCart, selectTotalItemsInCart };
