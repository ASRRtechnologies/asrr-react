import React, {Component} from 'react';
import browser from '../images/browserflattrimmed.png';


class Clients extends Component {
	render() {
		return (
			<div class="landing-wrapper">
				<div id="one">
					<h1>ASRR delivers expert problem analytics and solutions in web/app development, desktop
						applications and many more
						environments.</h1>
				</div>

				<div id="two">
					<img src={browser} alt="browser"/>
				</div>
			</div>
		);
	}
}

export default Clients;
