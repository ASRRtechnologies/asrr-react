import React, {Component} from 'react';
import Fade from 'react-reveal';
import ServiceGrid from "../components/services/ServiceGrid";

import web from "../images/services/webdesign.svg"
import app from "../images/services/app.svg"
import desktop from "../images/services/responsive.svg"
import backend from "../images/services/back-end.svg"
import database from "../images/services/database.svg"
import data from "../images/services/data.svg"
import bim from "../images/services/bim.svg"
import consultancy from "../images/services/consultancy.svg"
import LightTextBox from "../components/shared/LightTextBox";
import Landing from "../components/Landing";

import skyline from "../images/backgrounds/skyline.jpg";


const services = [
	{
		image: web,
		service: "web",
	},
	{
		image: app,
		service: "app",
	},
	{
		image: desktop,
		service: "desktop"
	},
	{
		image: backend,
		service: "backend"
	},
	{
		image: database,
		service: "database"
	},
	{
		image: data,
		service: "data-analysis"
	},
	{
		image: bim,
		service: "bim"
	},
	{
		image: consultancy,
		service: "consultancy"
	}
];

const button =
	{
		text: "buttons.portfolio",
		href: "/Portfolio",
		fa: ["fas", "images"]
	};

class Services extends Component {
	render() {
		return (
			<div>
				<Fade bottom>
					<Landing name="services" background={skyline}/>
					<LightTextBox name="services.text"/>
					<ServiceGrid section="services.section" items={services}/>
				</Fade>
			</div>
		);
	}
}

export default Services;