import React, {Component} from 'react';
import {translate} from 'react-multi-lang';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Particles from "react-particles-js";

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
		let divStyle = {height: "800px"};


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
					<div className="landing-canvas">
						<Particles
							height="800px"
							width="600px"
							params={{
								"fps_limit": 28,
								"particles": {
									"number": {
										"value": 200,
										"density": {
											"enable": false
										}
									},
									"line_linked": {
										"enable": true,
										"distance": 30,
										"opacity": 0.4
									},
									"move": {
										"speed": 1
									},
									"opacity": {
										"anim": {
											"enable": true,
											"opacity_min": 0.05,
											"speed": 2,
											"sync": false
										},
										"value": 0.4
									}
								},
								"polygon": {
									"enable": true,
									"scale": 0.75,
									"type": "inline",
									"move": {
										"radius": 2
									},
									"url": "/assr-landing-path.svg",
									"inline": {
										"arrangement": "equidistant"
									},
									"draw": {
										"enable": true,
										"stroke": {
											"color": "rgba(255, 255, 255, .2)"
										}
									}
								},
								"retina_detect": false,
								"interactivity": {
									"events": {
										"onhover": {
											"enable": true,
											"mode": "bubble"
										},
									},
									"modes": {
										"bubble": {
											"size": 6,
											"distance": 40
										}
									}
								}
							}}/>
					</div>

				</div>
			</div>
		);
	}
}

export default translate(Landing);
