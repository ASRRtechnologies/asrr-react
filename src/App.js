import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Fade from 'react-reveal/Fade';


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
} from '@fortawesome/free-brands-svg-icons'
import Landing from './Components/Landing';
import Clients from './Components/Clients';
import SimpleSlider from "./Components/Slider";
import Services from "./Components/Services";
import Footer from "./Components/Footer"
import './App.css';
import logo from "./logo.svg";

library.add(faHtml5, faCss3Alt, faJs, faJava, faWindows, faLinux, faGithub, faGit, faReact, faAndroid, faAppStoreIos, faApple, faNode, faNodeJs, faPaypal, faFacebook, faTwitter, faSnapchat, faAws, faChrome, faLinkedin);

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
		<Landing/>
		<Landing/>
		<Landing/>
		<Landing/>
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
	render() {
		return (
			<div className="App">
				<div>
					<header className="header">
						<Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
						<input className="menu-btn" type="checkbox" id="menu-btn"/>
						<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"/></label>
						<ul className="menu">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/portfolio">Portfolio</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/careers">Careers</Link>
								<ul>
									<li><Link to="/">Home</Link></li>
									<li><Link to="/portfolio">Portfolio</Link></li>
									<li><Link to="/about">About</Link></li>
								</ul>


							</li>
							<li><Link to="/contact">Contact</Link></li>
						</ul>
					</header>
				</div>

				<Route path="/" exact component={Homepage}/>
				<Route path="/portfolio" component={Portfolio}/>
				<Route path="/about" component={About}/>
				<Route path="/careers" component={Careers}/>
				<Route path="/contact" component={Contact}/>

				<Fade bottom>
					<Footer/>
				</Fade>
			</div>
		);
	}
}

export default App;
