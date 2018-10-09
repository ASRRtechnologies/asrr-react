import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Landing from "../home/Landing";
import lowPolyOrange from "../../images/backgrounds/lowpolyorange.svg";
import team from "../../images/sectionimages/team.png"
import Team from "../about/Team";

var founders = {

};

class About extends Component {
	render() {
		return (
			<div>
				<Fade bottom>
					<Landing header="about.headline" background={lowPolyOrange} image={team}/>
				</Fade>
				<Fade bottom>
					<Team section="Founders" items={founders}/>
				</Fade>
			</div>
		);
	}
}

export default About;