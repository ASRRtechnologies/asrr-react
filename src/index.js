import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import unregisterServiceWorker from './registerServiceWorker';
import Analytics from 'react-router-ga';

import App from './App';
import ScrollToTop from "./components/shared/ScrollToTop";

ReactDOM.render(
	<Router>
		<Analytics id="UA-90768292-2">
			<ScrollToTop>
				<App/>
			</ScrollToTop>
		</Analytics>
	</Router>,
	document.getElementById('root')
);


unregisterServiceWorker();
