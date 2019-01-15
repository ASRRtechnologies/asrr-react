import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div>
					{/*<h2>Find us on</h2>*/}
					<a className="rounded" href="http://github.com/asrrtechnologies"><FontAwesomeIcon
						icon={["fab", "github"]}/></a>
					<a className="rounded" href="https://www.linkedin.com/company/asrr"><FontAwesomeIcon
						icon={["fab", "linkedin"]}/></a>
					<a className="rounded" href="https://www.facebook.com/asrrtech/"><FontAwesomeIcon
						icon={["fab", "facebook"]}/></a>
				</div>
				<div>
					<a className="rounded" href="tel:+31641633358"><FontAwesomeIcon icon={["fas", "phone"]}/> 06 416 333
						58</a>
					<a className="rounded" href="mailto:contact@asrr.nl"><FontAwesomeIcon
						icon={["fas", "envelope"]}/> contact@asrr.nl</a>
				</div>
				<div>
					<a href="http://vps.asrr.nl/algemene-voorwaarden/algemene-voorwaarden-asrr.pdf">Algemene
						Voorwaarden</a>
					<a href="/faq">FAQ</a>
					<a href="/licenses">Licenses</a>
					<a href="/privacy">Privacy</a>
					<a href="/cookies">Cookies</a>
				</div>
			</div>
		);
	}
}

export default Footer;
