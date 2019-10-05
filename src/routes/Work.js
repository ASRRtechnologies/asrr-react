import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import WorkGrid from "../components/work/WorkGrid";
import {getLanguage, translate} from 'react-multi-lang'
import DescriptionDiv from "../components/home/DescriptionDiv";
import LandingImage from "../components/shared/landing/LandingImage";
import landing from "../assets/images/work/landing.jpg";

class Work extends Component {
	render() {
		return (
			<div className="portfolio-wrapper">
				<LandingImage title={'Work'} image={landing}/>

					{/*<NewLanding name="work.landing"/>*/}
					<WorkGrid/>
			</div>
		);
	}
}

export default translate(Work);
