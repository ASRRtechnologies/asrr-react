import React, {Component} from 'react';
import {translate} from 'react-multi-lang';


class LightTextBox extends Component {
	render() {
		return (
			<div className="team-text background-white">
				<h1>{this.props.t(this.props.name + ".headline")}</h1>
				<p>{this.props.t(this.props.name + ".content")}</p>
			</div>
		);
	}
}

export default translate(LightTextBox);
