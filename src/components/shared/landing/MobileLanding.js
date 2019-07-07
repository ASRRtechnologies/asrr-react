import React, {Component} from 'react';
import {translate} from 'react-multi-lang';
import SkyLine from "../../../assets/images/landing/purplesky.jpg"

class MobileLanding extends Component {
	render() {
		const landingStyle = {
			backgroundImage: SkyLine
		};

		return (
			<div className="mobile-landing-container" style={landingStyle}>
				<div className="max1200">
					<div className="new-landing-text">
						<h3>{this.props.t(this.props.name + ".subtitle")}</h3>
						<h1>{this.props.t(this.props.name + ".title")}</h1>
						<p>{this.props.t(this.props.name + ".content")}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default translate(MobileLanding);
