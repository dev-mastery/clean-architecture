import { getAsyncInjectors } from 'utils/asyncInjectors';
import { errorLoading, loadModule } from 'utils/routeHelpers';

export default function createProductRoute(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars
  return {
    path: '/product/:id',
    name: 'product',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('product-list/reducer'),
        System.import('product-page/reducer'),
        System.import('cart-page/reducer'),
        System.import('product-page'),
      ]);

      const renderRoute = loadModule(cb);

      importModules.then(([listReducer, productReducer, cartReducer, component]) => {
        injectReducer('productList', listReducer.default);
        injectReducer('cart', cartReducer.default);
        injectReducer('currentProduct', productReducer.default);
        renderRoute(component);
      });

      importModules.catch(errorLoading);
    },
  };
}
