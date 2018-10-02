import React, {Component} from 'react';
import lowpoly from '../images/lowpoly.jpg';
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
			<div class="row" style={sectionStyle} className="Landing">
				<div class="column landing-wrapper">
					<h1 class="">ASRR delivers expert problem analytics and solutions in web, desktop, app and many more
						environments.</h1>
					{/*<SimpleSlider class="landing-slider"/>*/}
				</div>

				<div class="column">
					<img style={landingStyle} src={browser} alt="browser"/>
				</div>
			</div>
		);
	}
}

export default Clients;
