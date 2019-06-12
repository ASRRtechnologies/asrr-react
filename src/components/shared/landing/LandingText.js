import React, {Component} from 'react';
import {translate} from 'react-multi-lang';
import laptop from "../../../assets/images/landing/laptop.jpg";

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
					<div className="fluid-landing-image">
						<img src={laptop} alt="laptop"/>
						<div className="fluid-landing-image-text">
							<h1>What do we do?</h1>
							<div className="fluid-landing-flex-grid">
								<div className="fluid-landing-col">
									<h2>Develop custom tailored software</h2>
								</div>
								<div className="fluid-landing-col">
									<h2>Build and host blazing fast servers/desktops</h2>
								</div>
								<div className="fluid-landing-col">
									<h2>Provide flexible developers</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default translate(LandingText);