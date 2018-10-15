import React, {Component} from "react";
import Wobble from "react-reveal/Wobble";

class NoRef extends Component {
	render() {
		return (
			<div className="noref white">
				<div className="glitch">
					<Wobble>
						<h3>
							Oops... Page <code>{this.props.location.pathname}</code> was not found
						</h3>
					</Wobble>
				</div>
			</div>
		);
	}
}

export default NoRef;
