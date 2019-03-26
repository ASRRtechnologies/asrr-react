import React, {Component} from 'react';
import Fade from 'react-reveal';
import purple from "../images/backgrounds/purple.svg"
import server from "../images/sectionimages/work.png"
import ServiceGrid from "../components/services/ServiceGrid";

import web from "../images/services/webdesign.svg"
import app from "../images/services/app.svg"
import desktop from "../images/services/responsive.svg"
import backend from "../images/services/back-end.svg"
import database from "../images/services/database.svg"
import data from "../images/services/data.svg"
import bim from "../images/services/bim.svg"
import consultancy from "../images/services/consultancy.svg"
import InternalButton from "../components/InternalButton";
import Triangle from "../animations/Triangle";
import SphereLanding from "../components/shared/SphereLanding";


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
					<Triangle/>
					<SphereLanding header="services.headline" subtitle="services.subtitle" background={purple}
					               image={server}/>
				</Fade>
				<Fade bottom>
					<ServiceGrid section="services.section" items={services}/>
				</Fade>
				<Fade bottom>
					<InternalButton button={button}/>
				</Fade>
			</div>
		);
	}
}

export default Services;