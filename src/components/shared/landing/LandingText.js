import React, {Component} from 'react';
import {translate} from 'react-multi-lang';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import NavLink from "react-router-dom/es/NavLink";

class LandingText extends Component {
	render() {
		return (
			<div className="fluid-landing-container">
				<div className="">
					<div className="fluid-landing-transparent-text">
						<h3>{this.props.t(this.props.name + ".subtitle")}</h3>
						<h1>{this.props.t(this.props.name + ".title")}</h1>
						<p>{this.props.t(this.props.name + ".content")}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default translate(LandingText);