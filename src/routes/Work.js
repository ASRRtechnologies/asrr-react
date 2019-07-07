import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import WorkGrid from "../components/work/WorkGrid";

class Work extends Component {
	render() {
		return (
			<div className="portfolio-wrapper">
				<Fade bottom>
					{/*<NewLanding name="work.landing"/>*/}
					<WorkGrid/>
				</Fade>
			</div>
		);
	}
}

export default Work;
