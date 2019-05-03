import React, {Component} from 'react';
import {translate} from 'react-multi-lang';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Landing extends Component {

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
		let divStyle;

		if (this.props.color) {
            divStyle = {backgroundColor: this.props.color}
		} else {
            divStyle = {backgroundImage: 'url(' + this.props.background + ')'}
		}

		return (
			<div className="landing-wrapper parallax" style={divStyle}>
				<div className="max1200">
					<h3>{this.props.t(this.props.name + ".subtitle")}</h3>
					<h1>{this.props.t(this.props.name + ".title")}</h1>
					<p>{this.props.t(this.props.name + ".content")}</p>
				</div>
			</div>
		);
	}
}

export default translate(Landing);
