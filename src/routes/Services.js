import React, {Component} from 'react';
import Fade from 'react-reveal';
import ServiceGrid from "../components/services/ServiceGrid";

import web from "../assets/images/services/webdesign.svg"
import app from "../assets/images/services/app.svg"
import desktop from "../assets/images/services/responsive.svg"
import backend from "../assets/images/services/back-end.svg"
import database from "../assets/images/services/database.svg"
import data from "../assets/images/services/data.svg"
import bim from "../assets/images/services/bim.svg"
import consultancy from "../assets/images/services/consultancy.svg"
import LightTextBox from "../components/shared/LightTextBox";
import NewLanding from "../components/shared/NewLanding";
import ServiceSummary from "../components/home/ServiceSummary";
import LandingText from "../components/shared/landing/LandingText";
import ChoiceHelper from "../components/services/ChoiceHelper";


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
					<ChoiceHelper/>

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