import React, {Component} from "react";
import Wobble from "react-reveal/Wobble";
import Construction from '../../routes/Construction'

class NoRef extends Component {
	render() {
		const url = this.props.location.pathname.replace('/','');
		return (
			<div>
				{console.log(url)};
				<Construction text={`We couldn't find the page ${url}`}/>
			</div>
		);
	}
}

export default NoRef;
