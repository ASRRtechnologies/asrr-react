import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import Language from "../../../utils/Language";
import {getLanguage, translate} from "react-multi-lang";
import logo from "../../../assets/images/logo.svg";
import nlFlag from "../../../assets/images/flags/nl.svg";
import enFlag from "../../../assets/images/flags/en.svg";

class Header extends Component {

    constructor(props) {
        super(props);
        this.header = React.createRef();
        this.state = {
            menuOpen: false,
            header: "",
            prevScrollprops: ""
        }

    }


    menuOpen = () => {
        this.setState({menuOpen: !this.state.menuOpen});
        let position;
        // if(this.state.menuOpen) {
        //     position = "fixed";
        // }
        // else position = "static";
        // this.header.current.style.position= position;
        // console.log(this.header.current.style.position);
    };

    closeMenu = () => {
        this.setState({menuOpen: false})
    };

    headerScroll = () => {
        this.setState({prevScrollprops: window.pageYOffset});
        let currentScrollPos = window.pageYOffset;
        if(!this.state.menuOpen){
            if (this.state.prevScrollpos > currentScrollPos) {
                this.header.current.style.top = "0";
            }
            else {
                this.header.current.style.top = "-80px";
            }
        }
        this.setState({prevScrollpos: currentScrollPos});
    };

    static selectPreferredLanguage(language) {
        Language.selectPreferredLanguage(language);
        window.location.reload();
    }

    static handleFlagClick() {
        if (getLanguage().toString() === 'nl') {
            Header.selectPreferredLanguage('en');
        } else if (getLanguage().toString() === 'en') {
            Header.selectPreferredLanguage('nl')
        }
    }


    componentDidMount() {
        document.addEventListener("scroll", this.headerScroll);

        if (getLanguage().toString() === 'nl') {
            this.setState({languageImage: nlFlag});
        } else if (getLanguage().toString() === 'en') {
            this.setState({languageImage: enFlag});
        }

    };

    componentWillUnmount() {
        document.removeEventListener("scroll", this.headerScroll);
    }

    render() {
        const src = this.state.languageImage;

        return (
            <div ref={this.header} className="navigation-container">
                <div className="navigation-wrapper">

                    <div  onClick={this.closeMenu} className="logo-wrapper"><NavLink to="/"><img className="logo" src={logo}
                                                                       alt="logo"/></NavLink></div>

                    <div className={this.state.menuOpen ? "menu-open navigation-menu top" : "navigation-menu"}>
                        <div className={this.state.menuOpen ? "menu-open navigation-links" : " navigation-links"}>
                            <li onClick={this.closeMenu}><NavLink activeClassName='active-link'
                                                                  to="/work">{this.props.t("header.work")}</NavLink>
                            </li>
                            <li onClick={this.closeMenu}><NavLink activeClassName='active-link'
                                                                  to="/services">{this.props.t("header.services")}</NavLink>
                            </li>
                            <li onClick={this.closeMenu}><NavLink activeClassName='active-link'
                                                                  to="/team">{this.props.t("header.about")}</NavLink>
                            </li>
                            <li onClick={this.closeMenu}><NavLink activeClassName='active-link'
                                                                  to="/careers">{this.props.t("header.careers")}</NavLink>
                            </li>
                            <li onClick={this.closeMenu}><NavLink activeClassName='active-link'
                                                                  to="/contact">{this.props.t("header.contact")}</NavLink>
                            </li>
                        </div>

                        <div className={this.state.menuOpen ? "menu-open menu-overlay top" : "menu-overlay top"}></div>
                        <div
                            className={this.state.menuOpen ? "menu-open menu-overlay middle" : "menu-overlay middle"}></div>
                        <div
                            className={this.state.menuOpen ? "menu-open menu-overlay bottom" : "menu-overlay bottom"}></div>
                    </div>

                    <div className="translate-wrapper">
                        {/*eslint-disable-next-line*/}
                        <a className="translate-button rounded" onClick={Header.handleFlagClick} role="button"
                           style={{padding: "0"}}>
                                <img alt="current language flag" src={src} width="50px" height="18px"
                                     style={{verticalAlign: "middle", padding: "5px 0 8px 0"}}/>
							</a>
                        </div>

                    <ul id="mobile-navigation" className="hamburger-wrapper">
                        <div onClick={this.menuOpen} className="hamburger-box">
                            <div className={this.state.menuOpen ? "hamburger-open hamburger-line" : "hamburger-line"}>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}

export default translate(Header);
