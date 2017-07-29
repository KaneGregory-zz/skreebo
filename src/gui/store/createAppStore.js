import {createStore} from 'redux';

export default () => createStore((previousState = { count: 0 }, action) => ({
    count: previousState.count + 1
}));
