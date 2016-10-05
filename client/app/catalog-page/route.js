import { getAsyncInjectors } from 'utils/asyncInjectors';
import { errorLoading, loadModule } from 'utils/routeHelpers';

export default function createCatalogRoute(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars
  return {
    path: '/catalog',
    name: 'catalog',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('product-list/reducer.js'),
        System.import('catalog-page'),
      ]);

      const renderRoute = loadModule(cb);

      importModules.then(([reducer, component]) => {
        injectReducer('productList', reducer.default);
        renderRoute(component);
      });

      importModules.catch(errorLoading);
    },
  };
}
