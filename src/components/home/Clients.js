import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ClientGrid from "../ClientGrid";

class Clients extends Component {
	render() {
		return (
			<div className="clientGrid white">
				<ClientGrid headline="home.clientheadline" subtitle="home.clientsubtitle"/>
				<div className="centerButton-wrapper">
					<Link to="/Portfolio" className="rounded centerButton">Portfolio</Link>
				</div>
			</div>
		);
	}
}

export default Clients;
