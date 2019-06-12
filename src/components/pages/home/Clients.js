import React, {Component} from 'react';
import ClientGrid from "../../shared/ClientGrid";

class Clients extends Component {
	render() {
		return (
			<div className="clientGrid white">
                <ClientGrid headline="home.clientheadline"/>
			</div>
		);
	}
}

export default Clients;
