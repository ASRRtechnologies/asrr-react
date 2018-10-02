import React, {Component} from 'react';
import logo from '../logo.svg';

class Menu extends Component {
	render() {
		return (
			<div id="navbar" className="Menu">
				<img class="logo" src={logo} alt="logo"/>
				<a href="#home">Home</a>
				<a href="#news">Services</a>
				<a href="#contact">Contact</a>
			</div>
		);
	}
}

export default Menu;
