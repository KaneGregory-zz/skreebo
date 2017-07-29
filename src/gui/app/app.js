import AppView from './appView';
import { connect } from 'react-redux';

export default connect(state => ({
    count: state.count
}), dispatch => ({
    increment: () => dispatch({ type: 'INCREMENT' })
}))(AppView);
