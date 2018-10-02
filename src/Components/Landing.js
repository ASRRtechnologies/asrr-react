import React, {Component} from 'react';
import lowpoly from '../images/lowpoly.jpg';
import techy from '../images/techy.png';
import browser from '../images/browserflat.png';

var sectionStyle = {
	width: "100%",
	height: "650px",
	backgroundImage: `url(${lowpoly})`,
	paddingTop: "0"
};

var landingStyle = {
	float: "right",
	width: "40%"

};

class Clients extends Component {
	render() {
		return (
			<div class="landing" style={sectionStyle} className="Landing">
				<div class="landing-wrapper">
					<h1>ASRR delivers expert problem analytics and solutions in web, desktop, app and many more
						environments.</h1>
					<img style={landingStyle} src={browser} alt="background"/>
				</div>
				<img src={techy} alt="background"/>
			</div>
		);
	}
}

export default Clients;
