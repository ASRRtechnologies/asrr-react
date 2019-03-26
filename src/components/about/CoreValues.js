import React, {Component} from 'react';
import Sphere from "../../animations/Sphere";
import Triangle from "../../animations/Triangle";


class CoreValues extends Component {
	render() {
		return (
			<div className="team-text ">
				<Sphere/>
				<Triangle/>
			</div>
		);
	}
}

export default CoreValues;
