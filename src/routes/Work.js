import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import NewLanding from "../components/shared/NewLanding";
import LandingText from "../components/shared/landing/LandingText";
import WorkGrid from "../components/work/WorkGrid";
// import { render, Text } from '@inlet/react-pixi'
//
// import { Stage, Sprite } from '@inlet/react-pixi'

class Work extends Component {
	render() {
		return (
			<div className="portfolio-wrapper">
				<Fade bottom>
					<NewLanding name="work.landing"/>

					<WorkGrid/>
				</Fade>
			</div>
		);
	}
}

export default Work;
