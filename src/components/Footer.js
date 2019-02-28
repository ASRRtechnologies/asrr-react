import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import logo from "../images/logo.svg";

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="max1200">
					<div className="quarter-width">
						<img className="footer-logo" src={logo} alt="logo"/>
					</div>
					<div className="right social three-quarter-width">
						{/*<h2>Find us on</h2>*/}
						<a className="rounded" href="tel:+31641633358"><FontAwesomeIcon icon={["fas", "phone"]}/></a>
						<a className="rounded" href="mailto:contact@asrr.nl"><FontAwesomeIcon
							icon={["fas", "envelope"]}/></a>
						<a className="rounded" href="http://github.com/asrrtechnologies">
							<FontAwesomeIcon size={70} icon={["fab", "github"]}/>
						</a>
						<a className="rounded" href="https://www.linkedin.com/company/asrr">
							<FontAwesomeIcon size={70} icon={["fab", "linkedin"]}/>
						</a>
						<a className="rounded" href="https://www.facebook.com/asrrtech/">
							<FontAwesomeIcon size={70} icon={["fab", "facebook"]}/>
						</a>
					</div>
					<hr/>
					<div className="full-width-900">
						<div className="blue">
							<a href="http://vps.asrr.nl/algemene-voorwaarden/algemene-voorwaarden-asrr.pdf">Algemene
								Voorwaarden</a>
							<a href="/faq">FAQ</a>
							<a href="/licenses">Licenses</a>
							<a href="/privacy">Privacy</a>
							<a href="/cookies">Cookies</a>
						</div>
					</div>
					<div className="right-responsive full-width-900">
						Copyright &copy; 2019 ASRR Tech, All rights reserved.
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
