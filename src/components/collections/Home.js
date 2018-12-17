import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Landing from "../Landing";
import SimpleSlider from "../home/Slider";
import ServiceSummary from "../home/ServiceSummary";
import Clients from "../home/Clients";
import lowPolyRed from "../../images/backgrounds/lowpoly.jpg";
import browser from '../../images/sectionimages/browserflattrimmed.png';
import Languages from "./Languages";

const button =
	{
		text: "buttons.home",
		href: "/team",
		fa: ["fas", "users"]
	};

class Home extends Component {
	render() {
		return (
			<div>
				<Fade bottom>
					<Landing header="home.headline" subtitle="home.subtitle" background={lowPolyRed} image={browser}
					         button={button}/>
				</Fade>
				<Fade bottom>
					<SimpleSlider/>
				</Fade>
				<Fade bottom>
					<ServiceSummary/>
				</Fade>
				<Fade bottom>
					<Clients/>
				</Fade>
				<Fade bottom>
					<Languages/>
				</Fade>
			</div>
		);
	}
}

export default Home;