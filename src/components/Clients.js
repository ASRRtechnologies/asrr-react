import React, {Component} from 'react';
import kroontje from "../images/clients/kroontje.svg";
import form from "../images/clients/form_logo-diap.svg";

class Clients extends Component {
	render() {
		return (
			<div className="clientGrid">
				<h2>Don't just take our word for it</h2>
				<p>Find the work we've done in the past in our portfolio</p>
				<div className="centerWrapper">
					<div>
						<a href="http://hetkroontjeweebosch.nl"><img src={kroontje} alt="Logo Kroontje"/></a>
						<a href="https://form.nl"><img src={form} alt="Logo Form"/></a>
						<a><img src={kroontje} alt="Logo Kroontje"/></a>
					</div>
				</div>
				<div>
					<a className="rounded">Test</a>
				</div>
			</div>
		);
	}
}

export default Clients;
