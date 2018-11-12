import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'

import unregisterServiceWorker from './registerServiceWorker';

import App from './App';
import ScrollToTop from "./components/ScrollToTop";

const history = createBrowserHistory();


ReactDOM.render(
	<Router history={history}>
        <ScrollToTop>
            <App/>
        </ScrollToTop>
    </Router>,
    document.getElementById('root')
);


unregisterServiceWorker();
