import React, {Component} from "react";
import {Link} from "react-router-dom";
import ReactModal from "react-modal";

import Language from "../Language";
import logo from "../images/logo.svg";

import {getLanguage} from "react-multi-lang";

import nlFlag from "../images/flags/nl.svg";
import enFlag from "../images/flags/en.svg";

class Header extends Component {
	constructor() {
		super();

		this.state = {
			showModal: false,
			languageImage: getLanguage()
		};


		console.log(getLanguage().toString());

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleOpenModal() {
		this.setState({showModal: true});
	}

	handleCloseModal() {
		this.setState({showModal: false});
	}

	selectPreferredLanguage(language) {
		Language.selectPreferredLanguage(language);
		this.handleCloseModal();
		window.location.reload();
	}

	componentDidMount() {
		if (getLanguage().toString() === 'nl') {
			this.setState({languageImage: nlFlag});
		} else if (getLanguage().toString() === 'en') {
			this.setState({languageImage: enFlag});
		}
	}

	render() {
		var src = this.state.languageImage;
		console.log(src);
		return (
			<div>
				<header className="header">
					<Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
					<input className="menu-btn" type="checkbox" id="menu-btn"/>
					<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"/></label>

					<span className="translate-wrapper">
                        {/*eslint-disable-next-line*/}
						<a className="translate-button rounded" onClick={this.handleOpenModal} role="button"
						   style={{padding: "0"}}>
                            <img alt="current language flag" src={src} width="50px" height="18px"
                                 style={{verticalAlign: "middle", padding: "5px 0 8px 0"}}/>
                        </a>
                    </span>

					<ReactModal
						isOpen={this.state.showModal}
						contentLabel="Minimal Modal Example"
						className="modal"
					>
						<div className="modal-container">
							{/*eslint-disable-next-line*/}
							<a href="#" onClick={this.selectPreferredLanguage.bind(this, 'nl')}
							   className="rounded resp">
								<img style={{width: "20px"}} src={nlFlag} alt="dutch flag"/> Nederlands
							</a>
							{/*eslint-disable-next-line*/}
							<a href="#" onClick={this.selectPreferredLanguage.bind(this, 'en')}
							   className="rounded resp">
								<img style={{width: "20px"}} src={enFlag} alt="english flag"/> English
							</a>
							{/*eslint-disable-next-line*/}
							<a href="#" className="rounded resp" onClick={this.handleCloseModal}>
								Cancel
							</a>
						</div>
					</ReactModal>

					<ul className="menu">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/team">The Team</Link></li>
						<li><Link to="/services">Services</Link></li>
						<li><Link to="/portfolio">Portfolio</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
				</header>
			</div>
		);
	}
}

export default Header;
