import { getAsyncInjectors } from 'utils/asyncInjectors';
import { errorLoading, loadModule } from 'utils/routeHelpers';

export default function createCartRoute(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars
  return {
    path: '/cart',
    name: 'cart',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('cart-page/reducer'),
        System.import('cart-page'),
      ]);

      const renderRoute = loadModule(cb);

      importModules.then(([reducer, component]) => {
        injectReducer('cart', reducer.default);
        renderRoute(component);
      });

      importModules.catch(errorLoading);
    },
  };
}
