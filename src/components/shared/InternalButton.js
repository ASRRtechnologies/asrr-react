import React, {Component} from 'react';
import {translate} from 'react-multi-lang';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";

class InternalButton extends Component {

	renderButton() {
		if (typeof this.props.button !== 'undefined') {
			return (
				<a href={this.props.button.href} className="rounded centerButton grey"><FontAwesomeIcon
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
			<div className="centerButton-wrapper">
				{this.renderButton()}
			</div>
		);
	}
}

export default translate(InternalButton);
