import React, {Component} from 'react';
import Fade from 'react-reveal';
import Landing from "../Landing";
import purple from "../../images/backgrounds/purple.svg"
import server from "../../images/sectionimages/work.png"
import ServiceGrid from "../services/ServiceGrid";

const services = [
	{
		logo: "",
		service: "web",
	},
	{
		logo: "",
		service: "app",
	},
	{
		service: "desktop"
	},
	{
		service: "backend"
	},
	{
		service: "database"
	},
	{
		service: "data-analysis"
	},
	{
		service: "bim"
	},
	{
		service: "consultancy"
	}
];

const button =
	{
		text: "More",
		href: "#services",
		fa: ["fas", "chevron-circle-down"]
	};

class Services extends Component {
	render() {
		return (
			<div>
				<Fade bottom>
					<Landing header="services.headline" subtitle="services.subtitle" background={purple}
					         image={server} button={button}/>
				</Fade>
				<Fade bottom>
					<ServiceGrid section="services.section" items={services}/>
				</Fade>
			</div>
		);
	}
}

export default Services;