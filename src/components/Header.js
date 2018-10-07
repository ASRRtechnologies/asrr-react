import React, {Component} from "react";
import {Link} from "react-router-dom";
import ReactModal from "react-modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Language from "../Language";
import logo from "../logo.svg";

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
    }

    render() {
        return (
            <div>
                <header className="header">
                    <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
                    <input className="menu-btn" type="checkbox" id="menu-btn"/>
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"/></label>

                    <span className="translate-wrapper">
                        <a className="translate-button rounded" onClick={this.handleOpenModal}>
                            <FontAwesomeIcon icon={["fas", "language"]}/>
                        </a>
                    </span>

                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="Minimal Modal Example"
                        className="modal"
                    >
                        <div className="modal-container">
                            <a onClick={this.selectPreferredLanguage.bind(this, 'nl')} className="rounded">
                                Nederlands
                            </a>
                            <a onClick={this.selectPreferredLanguage.bind(this, 'en')} className="rounded">
                                English
                            </a>
                            <a className="rounded" onClick={this.handleCloseModal}>
                                Close Modal
                            </a>
                        </div>
                    </ReactModal>

                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/careers">Careers</Link>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/portfolio">Portfolio</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </header>
            </div>
        );
    }
}

export default Header;
