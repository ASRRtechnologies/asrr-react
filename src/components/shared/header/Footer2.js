import React, {Component} from 'react';
import logo from "../../../assets/images/logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import background from "../../../assets/images/backgrounds/footer-bck.jpg";
import DescriptionDiv from "../../home/DescriptionDiv";
import Language from '../../../utils/Language'
import { getLanguage } from 'react-multi-lang'
import nlFlag from '../../../assets/images/flags/nl.svg'
import enFlag from '../../../assets/images/flags/en.svg'

class Footer2 extends Component {

    constructor(props) {
        super(props);
        this.footer = React.createRef();
    }

    getHeight = () => {
        let footerHeight = this.footer.current.offsetHeight;
        let footerTop = this.footer.current.getBoundingClientRect().top;
        // console.log(footerPosition);
        // console.log(documentHeight);
        this.props.height(footerHeight, footerTop);
    };

    componentDidMount() {
        document.addEventListener("scroll", this.getHeight);
    };

    componentWillUnmount() {
        document.removeEventListener("scroll", this.getHeight);
    }


    render() {
        return (
            <div ref={this.footer} className="footer-container">
                <div className="footer-grid-container">
                    <div>
                        <img className="footer-logo" src={logo} alt="logo"/>
                        <p style={{maxWidth:"350px"}}>When choosing asrr you hire a solution. We hope to see you soon and are happy to get to know
                            you</p>
                    </div>

                    <div className="footer-column">
                        <h3>Discover</h3>
                        <p>Services</p>
                        <p>Technologies</p>
                        <p>Portfolio</p>
                        <p>Contact</p>
                    </div>

                    <div className="footer-column">
                        <h3>About</h3>
                        <p>Team</p>
                        <p>Work</p>
                        <p>Blog</p>
                    </div>

                    <div className="footer-column">
                        <h3>Contact</h3>
                        <p>Veraartlaan 12,</p>
                        <p>2288 GM, Rijswijk</p>
                        <p>contact@asrr.nl</p>
                        <p>kvk: xxxxxxxxx</p>
                    </div>

                    <div className="footer-column">
                        <h3>Social</h3>
                        <p>Facebook</p>
                        <p>Linked-in</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                    </div>
                </div>

                {/*    /!*<div className="quarter-width">*!/*/}
                {/*    /!*<img className="footer-logo" src={logo} alt="logo"/>*!/*/}
                {/*    /!*</div>*!/*/}
                {/*    <div className="footer-icons">*/}
                {/*        <div className="footer-logo">*/}
                {/*            <img  src={logo} alt="logo"/>*/}
                {/*        </div>*/}
                {/*        /!*<h2>Find us on</h2>*!/*/}
                {/*        <div className="footer-icon-links">*/}
                {/*            <a className="rounded" href="tel:+31641633358"><FontAwesomeIcon icon={["fas", "phone"]}/></a>*/}
                {/*            <a className="rounded" href="mailto:contact@asrr.nl"><FontAwesomeIcon*/}
                {/*                icon={["fas", "envelope"]}/></a>*/}
                {/*            <a className="rounded" href="http://github.com/asrrtechnologies">*/}
                {/*                <FontAwesomeIcon size={70} icon={["fab", "github"]}/>*/}
                {/*            </a>*/}
                {/*            <a className="rounded" href="https://www.linkedin.com/company/asrr">*/}
                {/*                <FontAwesomeIcon size={70} icon={["fab", "linkedin"]}/>*/}
                {/*            </a>*/}
                {/*            <a className="rounded" href="https://www.facebook.com/asrrtech/">*/}
                {/*                <FontAwesomeIcon size={70} icon={["fab", "facebook"]}/>*/}
                {/*            </a>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="footer-terms">*/}
                {/*        <li><a href="/licenses">Licenses</a></li>*/}
                {/*        <li><a href="/privacy">Privacy</a></li>*/}
                {/*        <li><a href="/cookies">Cookies</a></li>*/}
                {/*        <li><a href="http://vps.asrr.nl/algemene-voorwaarden/algemene-voorwaarden-asrr.pdf">Algemene*/}
                {/*            Voorwaarden</a></li>*/}
                {/*        <li><a href="/faq">FAQ</a></li>*/}
                {/*    </div>*/}

                    <div className="footer-copyright-wrapper">
                        <br/>
                        <div className="footer-copyright">
                            <span>
                            <p>Copyright &copy; 2019 ASRR Tech, All rights reserved.</p>
                            </span>

                            <span className="footer-flexbox">
                            <p>Terms</p>
                            <p>Privacy</p>
                            </span>

                        </div>

                    </div>
            </div>
        );
    }
}

export default Footer2;
