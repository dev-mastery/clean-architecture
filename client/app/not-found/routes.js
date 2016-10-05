import { getAsyncInjectors } from 'utils/asyncInjectors';
import { errorLoading, loadModule } from 'utils/routeHelpers';

export default function createNotFoundRoute(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars
  return {
    path: '*',
    name: 'notfound',
    getComponent(nextState, cb) {
      System.import('not-found')
        .then(loadModule(cb))
        .catch(errorLoading);
    },
  };
}
