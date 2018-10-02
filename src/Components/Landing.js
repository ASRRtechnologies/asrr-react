import React, {Component} from 'react';
import lowpoly from '../images/lowpoly.svg';

var sectionStyle = {
	width: "100%",
	height: "400px",
	backgroundImage: `url(${lowpoly})`
};

class Clients extends Component {
	render() {
		return (
			<div className="ClientList">
				<div className="customer-logos" style={sectionStyle}>

				</div>
			</div>
		);
	}
}

export default Clients;
