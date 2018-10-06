import React, {Component} from 'react';
import browser from '../images/browserflattrimmed.png';


class Landing extends Component {
	render() {
		return (
			<div class="landing-wrapper">
				<div id="landing-text">
					<h1>ASRR delivers expert problem analytics and solutions in web/app development, desktop
						applications and many more
						environments.</h1>
				</div>

				<div id="landing-image">
					<img src={browser} alt="browser"/>
				</div>
			</div>
		);
	}
}

export default Landing;
