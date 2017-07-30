import createAppStore from './store/createAppStore';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import App from './app/app';
import TimelineObject from './objects/timeline/timeline';
import TimelineScreen from './screens/timeline/timeline';

const root = document.createElement('div');
document.body.appendChild(root);

const screens = {
    [TimelineScreen.id]: TimelineScreen
};

const store = createAppStore([TimelineObject], Object.keys(screens));

ReactDOM.render((
    <Provider store={store}>
        <App screens={screens}/>
    </Provider>
), root);
