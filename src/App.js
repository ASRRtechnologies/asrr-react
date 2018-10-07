import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import {translate} from 'react-multi-lang';

import {library} from '@fortawesome/fontawesome-svg-core';
import {
	faAndroid,
	faApple,
	faAppStoreIos,
	faAws,
	faChrome,
	faCss3Alt,
	faFacebook,
	faGit,
	faGithub,
	faHtml5,
	faJava,
	faJs,
	faLinkedin,
	faLinux,
	faNode,
	faNodeJs,
	faPaypal,
	faReact,
	faSnapchat,
	faTwitter,
	faWindows
} from '@fortawesome/free-brands-svg-icons';
import {faLanguage} from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Language from './Language'
import Landing from './components/Landing';
import Clients from './components/Clients';
import SimpleSlider from "./components/Slider";
import Services from "./components/Services";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Websites from "./components/portfolio/Websites";

library.add(faLanguage, faHtml5, faCss3Alt, faJs, faJava, faWindows, faLinux, faGithub, faGit, faReact, faAndroid, faAppStoreIos, faApple, faNode, faNodeJs, faPaypal, faFacebook, faTwitter, faSnapchat, faAws, faChrome, faLinkedin);

const Homepage = () => (
    <div>
        <Fade bottom>
            <Landing/>
        </Fade>
        <Fade bottom>
            <SimpleSlider/>
        </Fade>
        <Fade bottom>
            <Services/>
        </Fade>
        <Fade bottom>
            <Clients/>
        </Fade>
    </div>
);

const Portfolio = () => (
    <div>
	    <Websites/>
    </div>
);

const About = () => (
    <div>
        <ul>
            <li>San Francisco</li>
            <li>Istanbul</li>
            <li>Tokyo</li>
        </ul>
    </div>
);

const Careers = () => (
    <div>
        <ul>
            <li>San Francisco</li>
            <li>Istanbul</li>
            <li>Tokyo</li>
        </ul>
    </div>
);

const Contact = () => (
    <div>
        <ul>
            <li>San Francisco</li>
            <li>Istanbul</li>
            <li>Tokyo</li>
        </ul>
    </div>
);

class App extends Component {
    constructor() {
        super();
        Language.initialize();
    }

    render() {
        return (
            <div className="App">
                <Header/>

                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/about" component={About}/>
                    <Route path="/careers" component={Careers}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>

                <Fade bottom>
                    <Footer/>
                </Fade>
            </div>
        );
    }
}

export default translate(App);
