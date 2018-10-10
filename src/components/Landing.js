import React, {Component} from 'react';
import {translate} from 'react-multi-lang';

class Landing extends Component {
	render() {
		let divStyle = {
			backgroundImage: 'url(' + this.props.background + ')',
		};
		return (
			<div className="landing-wrapper" style={divStyle}>
				<div id="landing-text">
					<h1>{this.props.t(this.props.header)}</h1>
				</div>

				<div id="landing-image">
					<img src={this.props.image} alt="browser"/>
				</div>
			</div>
		);
	}
}

export default translate(Landing);
