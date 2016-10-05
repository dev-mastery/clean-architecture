import { connect } from 'react-redux';
import NotFoundTemplate from 'not-found/template';

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundTemplate);

function mapStateToProps(state) {
  return state.toJS();
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}
