import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import NewLanding from "../components/shared/NewLanding";


class Work extends Component {
	render() {
		return (
			<div className="portfolio-wrapper">
				<Fade bottom>
					<NewLanding name="portfolio.landing"/>
				</Fade>
			</div>
		);
	}
}

export default Work;