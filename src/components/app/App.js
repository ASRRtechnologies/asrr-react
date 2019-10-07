import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import { translate } from 'react-multi-lang'

import { library } from '@fortawesome/fontawesome-svg-core/index'
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
	faWindows,
} from '@fortawesome/free-brands-svg-icons/index'
import {
	faChevronCircleDown,
	faCogs,
	faEnvelope,
	faImages,
	faLanguage,
	faPhone,
	faUsers,
} from '@fortawesome/free-solid-svg-icons/index'

import './App.css'
import Language from '../../utils/Language'
import NoRef from '../shared/404'
import Header from '../shared/header/Header'
import Languages from '../../routes/Languages'
import Contact from '../../routes/Contact'
import About from '../../routes/About'
import Services from '../../routes/Services'
import Home from '../../routes/Home'
import Work from '../../routes/Work'
import Footer2 from '../shared/header/Footer2'
import ServicePage from '../services/ServicePage'
import WorkSection from '../work/worksections/WorkSection'
import {portfolioImages} from "../shared/PortfolioImages";
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
		this.state= {
			header: true,
			preload: true,
			data:[],
			footerHeight:"",
			footerTop:""
		}
		Language.initialize();
	}

	handlePagination = (data, name) => {
		this.setState({data:{...this.state.data,[name]:data}});
	};

	getHeight = (height, position) => {
		this.setState({footerHeight:height, footerTop:position});
 	}

	componentDidMount(){
		setTimeout(
			function() {
				this.setState({preload:false});
			}
			.bind(this),
			2000
		);
	}

	render() {

		const currentPath = window.location.pathname;
		return <div className={this.state.preload ? "App pre-load": "App"}>
			<Header footerHeight={this.state.footerHeight} footerTop={this.state.footerTop}/>
			{/*<ScrollPosition data={this.state.data}/>*/}
			<Switch>
				<Route path="/" exact   render={(props) =><Home data={this.handlePagination}/>}/>
				<Route path="/work" exact component={Work}/>
				<Route path="/services" component={Services}/>
				<Route path="/team" component={About}/>
				<Route path="/contact" component={Contact}/>
				<Route path="/Languages" component={Languages}/>
				<Route path="/service/desktop" component={ServicePage}/>
				<Route path='/github' component={() => window.location = "https://github.com/ASRRWebdesign"}/>
				<Route path="/work/hes"  render={(props) =><WorkSection data={portfolioImages.Hes} name="Hes"/>}/>
				<Route path="/work/nwo"  render={(props) =><WorkSection data={portfolioImages.NWO} name="NWO"/>}/>
				<Route path="/work/form"  render={(props) =><WorkSection data={portfolioImages.Form} name="Form"/>}/>
				<Route component={NoMatch}/>
				<Route component={renderHeader} />
			</Switch>
			<Fade bottom>
				<Footer2 height={this.getHeight}/>
			</Fade>
		</div>;
	}
}

export default translate(App);
