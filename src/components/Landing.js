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
			<div className="landing-wrapper parallax" style={divStyle}>
				<div className="max1200">
					<div id="landing-text">
						<h1>{this.props.t(this.props.header)}</h1>
						<hr style={hrStyle}/>
						<p>{this.props.t(this.props.subtitle)}</p>
						{this.renderButton()}
					</div>

					<div id="landing-image">

						<img src={this.props.image} alt="browser"/>
					</div>
				</div>
			</div>
		);
	}
}

export default translate(Landing);
