import {createStore} from 'redux';

export default (objects = [], screenIds = []) =>
    createStore((previousState = {
        screenIds,
        selectedScreenId: screenIds[0]
    }, action) =>
        objects.reduce(
            (state, object) => Object.assign({}, state, {[object.name]: object.reducer(state[object.name], action)}),
            previousState
        )
    );
