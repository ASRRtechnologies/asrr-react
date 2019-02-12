import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Landing from "../Landing";
import ServiceSummary from "../home/ServiceSummary";
import Clients from "../home/Clients";
import lowPolyRed from "../../images/backgrounds/lowpoly.jpg";
import browser from '../../images/sectionimages/browserflattrimmed.png';

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
					         color={false}
					         button={button}/>
				</Fade>
				<hr/>
                <Fade bottom>
                    <Clients/>
                </Fade>

				<Fade bottom>
					<ServiceSummary/>
				</Fade>

                {/*TODO: business case*/}

                <Fade bottom>
	                {/*<SimpleSlider/>*/}
                </Fade>

				<Fade bottom>
					{/*<Languages/>*/}
				</Fade>
			</div>
		);
	}
}

export default Home;