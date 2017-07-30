import AppView from './appView';
import { connect } from 'react-redux';

const getDispatcherForEvent = (event, dispatch) => (...args) => dispatch(event(...args));

const getComponentForScreen = screen => connect(
    state => screen.objects.reduce(
        (props, object) => Object.assign(props, {[object]: state[object]}),
        {}
    ),
    dispatch => Object.keys(screen.events).reduce(
        (props, eventName) => Object.assign(props, {[eventName]: getDispatcherForEvent(screen.events[eventName], dispatch)}),
        {}
    )
)(screen.view);

export default connect((state, ownProps) => ({
    screens: state.screenIds.map(screenId => {
        const screen = ownProps.screens[screenId];
        return {
            id: screen.id,
            name: screen.name,
            component: getComponentForScreen(screen)
        };
    }),
    selectedScreenId: state.selectedScreenId
}), dispatch => ({
    selectScreen: () => dispatch({ type: 'SELECT_SCREEN' })
}))(AppView);
