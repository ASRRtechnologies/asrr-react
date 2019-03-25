import React, {Component} from 'react';
import {translate} from 'react-multi-lang';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
		let divStyle;

		let hrStyle = {
			color: "#1A1A1A",
			border: "2px solid #1A1A1A",
			borderColor: "#1A1A1A",
			backgroundColor: "#1A1A1A",
			borderRadius: "5px",
			marginLeft: "5%",
			width: "15%",

		};

		return (
			<div className="new-landing parallax">
				<div className="max1200">
					<div className="new-landing-text">
						<h3>{this.props.t(this.props.header)}</h3>
						<h1>{this.props.t(this.props.header)}</h1>
						<p>{this.props.t(this.props.header)}{this.props.t(this.props.header)}{this.props.t(this.props.header)}{this.props.t(this.props.header)}{this.props.t(this.props.header)}{this.props.t(this.props.header)}{this.props.t(this.props.header)}{this.props.t(this.props.header)}{this.props.t(this.props.header)}{this.props.t(this.props.header)}{this.props.t(this.props.header)}</p>
						{this.renderButton()}
					</div>
				</div>
			</div>
		);
	}
}

export default translate(NewLanding);
