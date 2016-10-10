/*
 * The route belongs to the feature so we keep it with the feature code.
 * The drawback to this approach is that developers have to be cognicant
 * of name collisions. This app is too small to worry about.
 *
 * On the plus side, this code allows the client to only load
 * the bits he needs.
*/

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
        // System.import('product-list/reducer.js'),
        System.import('catalog-page'),
      ]);

      const renderRoute = loadModule(cb);

      importModules.then(([component]) => {
        renderRoute(component);
      });

      importModules.catch(errorLoading);
    },
  };
}
