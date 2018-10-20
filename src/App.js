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
import {
	faChevronCircleDown,
	faCogs,
	faEnvelope,
	faImages,
	faLanguage,
	faPhone,
	faUsers
} from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Language from './Language'
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/collections/Home";
import Team from "./components/collections/Team";
import Services from "./components/collections/Services";
import NoRef from "./components/404";
import Portfolio from "./components/collections/Portfolio";
import Contact from "./components/collections/Contact";


library.add(faLanguage, faImages, faCogs, faUsers, faChevronCircleDown, faPhone, faEnvelope, faHtml5, faCss3Alt, faJs, faJava, faWindows, faLinux, faGithub, faGit, faReact, faAndroid, faAppStoreIos, faApple, faNode, faNodeJs, faPaypal, faFacebook, faTwitter, faSnapchat, faAws, faChrome, faLinkedin);


const NoMatch = ({location}) => (
	<div>
		<NoRef location={location}/>
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
					<Route path="/" exact component={Home}/>
					<Route path="/portfolio" component={Portfolio}/>
					<Route path="/services" component={Services}/>
					<Route path="/team" component={Team}/>
					<Route path="/careers" component={Careers}/>
					<Route path="/contact" component={Contact}/>
					<Route path='/github' component={() => window.location = 'https://github.com/ASRRWebdesign'}/>
					<Route component={NoMatch}/>
				</Switch>

				<Fade bottom>
					<Footer/>
				</Fade>
			</div>
		);
	}
}

export default translate(App);
