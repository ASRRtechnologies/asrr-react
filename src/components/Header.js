import React, {Component} from "react";
import {Link} from "react-router-dom";
import ReactModal from "react-modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Language from "../Language";
import logo from "../images/logo.svg";

class Header extends Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		};

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

	render() {
		return (
			<div>
				<header className="header">
					<Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
					<input className="menu-btn" type="checkbox" id="menu-btn"/>
					<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"/></label>

					<span className="translate-wrapper">
                        {/*eslint-disable-next-line*/}
						<a className="translate-button rounded" onClick={this.handleOpenModal} role="button">
                            <FontAwesomeIcon icon={["fas", "language"]}/>
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
								Nederlands
							</a>
							{/*eslint-disable-next-line*/}
							<a href="#" onClick={this.selectPreferredLanguage.bind(this, 'en')}
							   className="rounded resp">
								English
							</a>
							{/*eslint-disable-next-line*/}
							<a href="#" className="rounded resp" onClick={this.handleCloseModal}>
								Close Modal
							</a>
						</div>
					</ReactModal>

					<ul className="menu">
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
