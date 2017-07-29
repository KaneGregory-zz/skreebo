import createAppStore from './store/createAppStore';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import App from './app/app';

const root = document.createElement('div');
document.body.appendChild(root);

const store = createAppStore();

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), root);
