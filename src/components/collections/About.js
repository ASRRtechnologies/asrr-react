import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Landing from "../home/Landing";
import lowPolyOrange from "../../images/backgrounds/lowpolyorange.svg";

class About extends Component {
	render() {
		return (
			<div>
				<Fade bottom>
					<Landing header="about.headline" background={lowPolyOrange}/>
				</Fade>
			</div>
		);
	}
}

export default About;