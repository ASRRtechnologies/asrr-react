import React, {Component} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
	faAndroid,
	faApple,
	faAppStoreIos,
	faAws,
	faChrome,
	faCss3,
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
import Menu from './Components/Menu';
import Landing from './Components/Landing';
import Clients from './Components/Clients';
import SimpleSlider from "./Components/Slider";
import Services from "./Components/Services";
import Footer from "./Components/Footer"
import './App.css';

library.add(faHtml5, faCss3, faJs, faJava, faWindows, faLinux, faGithub, faGit, faReact, faAndroid, faAppStoreIos, faApple, faNode, faNodeJs, faPaypal, faFacebook, faTwitter, faSnapchat, faAws, faChrome, faLinkedin);

class App extends Component {
  render() {
    return (
      <div className="App">
	      <Menu/>
	      <Landing/>
	      <SimpleSlider/>
		  <Services/>
	      <Clients/>
		  <Footer/>
      </div>
    );
  }
}

export default App;
