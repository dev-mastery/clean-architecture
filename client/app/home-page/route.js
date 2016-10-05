import { getAsyncInjectors } from 'utils/asyncInjectors';
import { errorLoading, loadModule } from 'utils/routeHelpers';

export default function createHomeRoute(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars
  return {
    path: '/',
    name: 'home',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('home-page'),
      ]);

      const renderRoute = loadModule(cb);

      importModules.then(([component]) => {
        renderRoute(component);
      });

      importModules.catch(errorLoading);
    },
  };
}
