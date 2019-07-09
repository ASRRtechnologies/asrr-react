import React, {Component} from 'react';
import {translate} from 'react-multi-lang';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import NavLink from "react-router-dom/es/NavLink";

class NewLanding extends Component {
	renderButton() {
		if (typeof this.props.button !== 'undefined') {
			return (
				<a href={this.props.button.href} className="rounded"><FontAwesomeIcon
					icon={this.props.button.fa}/> {this.props.t(this.props.button.text)}</a>
			);
		} else {
			return (
				null

			);
		}
	}

	render() {
		return (
			<div className="new-landing">
				<div className="max1200">
					<div className="new-landing-text">
						<h3>{this.props.t(this.props.name + ".subtitle")}</h3>
						<h1>{this.props.t(this.props.name + ".title")}</h1>
						<p>{this.props.t(this.props.name + ".content")}</p>
						{this.renderButton()}
						<NavLink to="/" className="gradient-button">learn more</NavLink>
					</div>
				</div>
			</div>
		);
	}
}

export default translate(NewLanding);
