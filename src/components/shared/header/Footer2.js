import React, { Component } from 'react'
import logo from '../../../assets/images/logo.svg'
import { NavHashLink as NavLink } from 'react-router-hash-link'

class Footer2 extends Component {

    constructor(props) {
        super(props);
        this.footer = React.createRef();
    }
    // componentDidMount() {
    //     document.addEventListener("scroll", this.getHeight);
    // };
    //
    // componentWillUnmount() {
    //     document.removeEventListener("scroll", this.getHeight);
    // }


    render() {
        return (
            <div ref={this.footer} className="footer-container">
                <div className="footer-grid-container">
                    <div>
                        <img className="footer-logo" src={logo} alt="logo"/>
                        <p style={{maxWidth:"350px"}}>When choosing ASRR you hire a solution.</p>
                    </div>

                    <div className="footer-column">
                        <h3>Discover</h3>
                        <NavLink to="/services"> <p>Services</p></NavLink>
                        <NavLink to="/work"> <p>Portfolio</p></NavLink>
                        <NavLink to="/contact"> <p>Contact</p></NavLink>
                    </div>

                    <div className="footer-column">
                        <h3>About</h3>
                        <NavLink to="/about"> <p>Team</p></NavLink>
                        <NavLink to="/about"> <p>Work</p></NavLink>
                        <NavLink to="/about"> <p>Blog</p></NavLink>
                    </div>

                    <div className="footer-column">
                        <h3>Contact</h3>
                        <p>Veraartlaan 12,</p>
                        <p>2288 GM, Rijswijk</p>
                        <p>contact@asrr.nl</p>
                        <p>kvk: 68205686</p>
                    </div>
                    {/*<div className="footer-column">*/}
                        {/*<h3>Social</h3>*/}
                        {/*<p>Facebook</p>*/}
                        {/*<p>Linked-in</p>*/}
                        {/*<p>Instagram</p>*/}
                        {/*<p>Twitter</p>*/}
                    {/*</div>*/}
                </div>
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
