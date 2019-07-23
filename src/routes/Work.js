import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import WorkGrid from "../components/work/WorkGrid";
import WorkPage2 from "../components/work/WorkPage2";

class Work extends Component {
	render() {
		return (
			<div className="portfolio-wrapper">
				{/*<Fade bottom>*/}
					{/*/!*<NewLanding name="work.landing"/>*!/*/}
					{/*<WorkGrid/>*/}
				{/*</Fade>*/}
				<WorkPage2/>
			</div>
		);
	}
}

export default Work;
