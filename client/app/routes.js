// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { createHomeRoute } from 'home-page';
import { createCatalogRoute } from 'catalog-page';
import { createCartRoute } from 'cart-page';
import { createProductRoute } from 'product-page';
import { createNotFoundRoute } from 'not-found';

export default function createRoutes(store) {
  return [
    createHomeRoute(store),
    createCatalogRoute(store),
    createProductRoute(store),
    createCartRoute(store),
    createNotFoundRoute(store),
  ];
}
