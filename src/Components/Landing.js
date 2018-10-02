import React, {Component} from 'react';
import lowpoly from '../images/lowpoly.jpg';
import techy from '../images/techy.png';

var sectionStyle = {
	width: "100%",
	height: "650px",
	backgroundImage: `url(${lowpoly})`
};

class Clients extends Component {
	render() {
		return (
			<div className="ClientList">
				<div className="customer-logos" style={sectionStyle}>

				</div>
				<img src={techy}/>
			</div>
		);
	}
}

export default Clients;
