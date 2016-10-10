/**
 * Extending or inheriting from a base class supplied by a third party framework
 * is a terrible thing to do. We should strive to avoid this at all costs.
 * It tightly binds our code to the framework and will cause great pain in the
 * future as the frameworks change and/or need to be replaced. Not clean!!
 *
 * We are doing it here in order to gain access to React's component lifecycle
 * hooks (mount and update).
 *
 * Notice that the real business logic is still happening in our use cases.
 * Keeping the logic seperate protects us from this
 * terrible practice and keeps our architecture relatively clean.
**/

import { connect } from 'react-redux';
import NotFoundTemplate from 'not-found/template';

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundTemplate);

function mapStateToProps(state) {
  return state.toJS();
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}
