import React, {Component} from 'react';
import Sphere from "../../animations/Sphere";


class CoreValues extends Component {
	render() {
		return (
			<div className="team-text dark max900">
				<Sphere/>
				<h1>ASRR Core Values</h1>
				<p>At ASRR, we believe in the power of a team working together. Even the best developer cannot master
					the broad range in which programming is applied nowadays on their own. That's why we have a diverse
					and well organized team, ready to take on any task at hand!</p>
			</div>
		);
	}
}

export default CoreValues;
