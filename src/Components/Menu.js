import React, {Component} from 'react';
import logo from '../logo.svg';

class Menu extends Component {
	render() {
		return (
			<div>
				{/*<a href="#home">Home</a>*/}
				{/*<a href="#news">Services</a>*/}
				{/*<a href="#news">Portfolio</a>*/}
				{/*<a href="#news">Demos</a>*/}
				{/*<a href="#contact">Contact</a>*/}

				<header className="header">
					<img className="logo" src={logo} alt="logo"/>
					<input className="menu-btn" type="checkbox" id="menu-btn"/>
					<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
					<ul className="menu">
						<li><a href="#work">Our Work</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#careers">Careers</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</header>
			</div>
		);
	}
}

export default Menu;
