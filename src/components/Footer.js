import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div>
					{/*<h2>Find us on</h2>*/}
					<a href="http://github.com/asrrwebdesign"><FontAwesomeIcon icon={["fab", "github"]}/></a>
					<a href="https://www.linkedin.com/company/asrr-webdesign"><FontAwesomeIcon
						icon={["fab", "linkedin"]}/></a>
					<a href="https://www.facebook.com/asrrwebdesign/"><FontAwesomeIcon icon={["fab", "facebook"]}/></a>
				</div>
				<div>
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
