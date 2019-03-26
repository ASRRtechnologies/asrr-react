import React, {Component} from 'react';
import {translate} from 'react-multi-lang';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class SphereLanding extends Component {
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
			<div className="new-landing sphere-landing">
				<div className="max1200">
					<div className="sphere-landing-text">
						<h1>{this.props.t(this.props.header)}</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default translate(SphereLanding);
