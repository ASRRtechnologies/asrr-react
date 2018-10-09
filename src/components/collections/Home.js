import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Landing from "../home/Landing";
import SimpleSlider from "../home/Slider";
import Services from "../home/Services";
import Clients from "../home/Clients";
import lowPolyRed from "../../images/backgrounds/lowpoly.jpg";
import browser from '../../images/sectionimages/browserflattrimmed.png';


class Home extends Component {
	render() {
		return (
			<div>
				<Fade bottom>
					<Landing header="home.headline" background={lowPolyRed} image={browser}/>
				</Fade>
				<Fade bottom>
					<SimpleSlider/>
				</Fade>
				<Fade bottom>
					<Services/>
				</Fade>
				<Fade bottom>
					<Clients/>
				</Fade>
			</div>
		);
	}
}

export default Home;