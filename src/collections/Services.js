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
import NewLanding from "../components/shared/NewLanding";
import ServiceSummary from "../components/home/ServiceSummary";
import LandingText from "../components/shared/landing/LandingText";


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

class Services extends Component {
	render() {
		return (
			<div>
				<Fade bottom>
					<LandingText name="expertise"/>
					<ServiceSummary/>

					<NewLanding name="services"/>
					<ServiceSummary/>
					<LightTextBox name="services.text"/>
					<ServiceGrid section="services.section" items={services}/>
				</Fade>
			</div>
		);
	}
}

export default Services;