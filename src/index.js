import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import registerServiceWorker from './registerServiceWorker';

import { setDefaultTranslations, setDefaultLanguage } from 'react-multi-lang'

import App from './App';

import en from './translations/en.json'
import nl from './translations/nl.json'

setDefaultTranslations({en, nl});
setDefaultLanguage('en');

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
