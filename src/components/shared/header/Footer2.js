import React, {Component} from 'react';
import logo from "../../../assets/images/logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import background from "../../../assets/images/backgrounds/footer-bck.jpg";
class Footer2 extends Component {
    render() {
        return (
            <div className="footer-container" style={{backgroundImage:`url(${background})`}}>
                <div className="footer-grid-container">
                    <div className="footer-column">
                        <h2> Product</h2>
                        <p>Overview</p>
                        <p>Pricing</p>
                        <p>iIntegrations</p>
                        <p>Enterprise</p>
                    </div>

                    <div className="footer-column">
                        <h2> Product</h2>
                        <p>Overview</p>
                        <p>Pricing</p>
                        <p>iIntegrations</p>
                        <p>Enterprise</p>

                    </div>

                    <div className="footer-column">
                        <h2> Product</h2>
                        <p>Overview</p>
                        <p>Pricing</p>
                        <p>iIntegrations</p>
                        <p>Enterprise</p>
                    </div>

                    <div className="footer-column">
                        <h2> Product</h2>
                        <p>Overview</p>
                        <p>Pricing</p>
                        <p>iIntegrations</p>
                        <p>Enterprise</p>
                    </div>
                </div>

                {/*<div className="quarter-width">*/}
                {/*<img className="footer-logo" src={logo} alt="logo"/>*/}
                {/*</div>*/}
                <div className="footer-icons">
                    <div className="footer-logo">
                        <img  src={logo} alt="logo"/>
                    </div>
                    {/*<h2>Find us on</h2>*/}
                    <div className="footer-icon-links">
                        <a className="rounded" href="tel:+31641633358"><FontAwesomeIcon icon={["fas", "phone"]}/></a>
                        <a className="rounded" href="mailto:contact@asrr.nl"><FontAwesomeIcon
                            icon={["fas", "envelope"]}/></a>
                        <a className="rounded" href="http://github.com/asrrtechnologies">
                            <FontAwesomeIcon size={70} icon={["fab", "github"]}/>
                        </a>
                        <a className="rounded" href="https://www.linkedin.com/company/asrr">
                            <FontAwesomeIcon size={70} icon={["fab", "linkedin"]}/>
                        </a>
                        <a className="rounded" href="https://www.facebook.com/asrrtech/">
                            <FontAwesomeIcon size={70} icon={["fab", "facebook"]}/>
                        </a>
                    </div>
                </div>

                <div className="footer-terms">
                    <li><a href="/licenses">Licenses</a></li>
                    <li><a href="/privacy">Privacy</a></li>
                    <li><a href="/cookies">Cookies</a></li>
                    <li><a href="http://vps.asrr.nl/algemene-voorwaarden/algemene-voorwaarden-asrr.pdf">Algemene
                        Voorwaarden</a></li>
                    <li><a href="/faq">FAQ</a></li>
                </div>

                <div className="footer-copyright">
                    Copyright &copy; 2019 ASRR Tech, All rights reserved.
                </div>
            </div>
        );
    }
}

export default Footer2;
