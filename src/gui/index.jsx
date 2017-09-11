import createAppStore from './store/createAppStore';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import { App } from './app/app';
import { Timeline } from './objects/timeline/timeline';
import { TimelineScreen } from './screens/timeline/timelineScreen';

const root = document.createElement('div');
document.body.appendChild(root);

const screens = {
    [TimelineScreen.id]: TimelineScreen
};

const store = createAppStore([Timeline], Object.keys(screens));

ReactDOM.render((
    <Provider store={store}>
        <App screens={screens}/>
    </Provider>
), root);
