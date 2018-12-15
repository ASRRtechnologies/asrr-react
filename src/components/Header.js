import React, {Component} from "react";
import {Link} from "react-router-dom";

import Language from "../Language";
import logo from "../images/logo.svg";

import {getLanguage} from "react-multi-lang";

import nlFlag from "../images/flags/nl.svg";
import enFlag from "../images/flags/en.svg";

class Header extends Component {
	constructor() {
		super();

		this.state = {
			languageImage: getLanguage()
		};

		console.log(getLanguage().toString());
        this.handleFlagClick = this.handleFlagClick.bind(this);
    }

    static selectPreferredLanguage(language) {
        Language.selectPreferredLanguage(language);
        window.location.reload();
    }

    handleFlagClick() {
        if (getLanguage().toString() === 'nl') {
            console.log("nl found");
            Header.selectPreferredLanguage('en');
            console.log(getLanguage().toString())
        } else if (getLanguage().toString() === 'en') {
            Header.selectPreferredLanguage('nl')
        }
	}

	componentDidMount() {
		if (getLanguage().toString() === 'nl') {
            this.setState({languageImage: enFlag});
		} else if (getLanguage().toString() === 'en') {
            this.setState({languageImage: nlFlag});
		}
	}

	render() {
        const src = this.state.languageImage;
        console.log(src);
		return (
			<div>
				<header className="header">
					<Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
					<input className="menu-btn" type="checkbox" id="menu-btn"/>
					<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"/></label>

					<span className="translate-wrapper">
                        {/*eslint-disable-next-line*/}
                        <a className="translate-button rounded" onClick={this.handleFlagClick} role="button"
                           style={{padding: "0"}}>
                            <img alt="current language flag" src={src} width="50px" height="18px"
                                 style={{verticalAlign: "middle", padding: "5px 0 8px 0"}}/>
                        </a>
                    </span>

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
