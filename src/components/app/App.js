import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import {translate} from 'react-multi-lang';

import {library} from '@fortawesome/fontawesome-svg-core/index';
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
	faWhatsapp,
	faWindows
} from '@fortawesome/free-brands-svg-icons/index';
import {
	faChevronCircleDown,
	faCogs,
	faEnvelope,
	faImages,
	faLanguage,
	faPhone,
	faUsers
} from '@fortawesome/free-solid-svg-icons/index';

import './App.css';
import Language from '../../utils/Language'
import NoRef from "../shared/404";
import Header from "../shared/header/Header";
import Footer from "../shared/header/Footer";
import Languages from "../../routes/Languages";
import Contact from "../../routes/Contact";
import About from "../../routes/About";
import Services from "../../routes/Services";
import Home from "../../routes/Home";
import Work from "../../routes/Work";
import Footer2 from "../shared/header/Footer2";
import ServicePage from "../services/ServicePage";

library.add(faWhatsapp, faLanguage, faImages, faCogs, faUsers, faChevronCircleDown, faPhone, faEnvelope, faHtml5, faCss3Alt, faJs, faJava, faWindows, faLinux, faGithub, faGit, faReact, faAndroid, faAppStoreIos, faApple, faNode, faNodeJs, faPaypal, faFacebook, faTwitter, faSnapchat, faAws, faChrome, faLinkedin);

const NoMatch = ({location}) => (
	<div>
		<NoRef location={location}/>
	</div>
);


const renderHeader = ({location}) => {
	console.log(location)

}

class App extends Component {
	constructor(props) {
		super(props);
		this.state={
			header:true,
		}
		Language.initialize();
	}

	render() {
		const currentPath = window.location.pathname;
		return <div className="App">
			<Header/>
			{console.log(currentPath)}

			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/work" component={Work}/>
				<Route path="/services" component={Services}/>
				<Route path="/team" component={About}/>
				<Route path="/contact" component={Contact}/>
				<Route path="/Languages" component={Languages}/>
				<Route path="/service/desktop" component={ServicePage}/>
				<Route path='/github' component={() => window.location = "https://github.com/ASRRWebdesign"}/>
				<Route component={NoMatch}/>
				<Route component={renderHeader} />
			</Switch>

			<Fade bottom>
				{/*<Footer/>*/}
				<Footer2/>
			</Fade>
		</div>;
	}
}

export default translate(App);
