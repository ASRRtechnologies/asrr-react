import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ClientGrid from "../ClientGrid";

class Clients extends Component {
	render() {
		return (
			<div className="clientGrid white">
				<h2>Don't just take our word for it</h2>
				<p>Find the work we've done in the past in our portfolio</p>
				<ClientGrid headline="home.clientheadline" subtitle="home.clientsubtitle"/>
				<div className="centerButton-wrapper">
					<Link to="/Portfolio" className="rounded centerButton">Portfolio</Link>
				</div>
			</div>
		);
	}
}

export default Clients;
