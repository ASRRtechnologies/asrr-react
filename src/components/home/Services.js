import React, {Component} from "react";
import laptop from "../../images/services/laptop.svg";
import router from "../../images/services/router.svg";
import computer from "../../images/services/computer.svg";
import phone from "../../images/services/phone.svg";
import {translate} from "react-multi-lang"

class Services extends Component {
    render() {
        return (
	        <div className="services-wrapper">
                <div>
	                <h1>What we do</h1>
                </div>

                <div className="flex-container">
                    <div>
	                    <img src={laptop} alt="webdesign"/>
	                    <h2>Webdesign</h2>
	                    <p>{this.props.t('home.web')}</p>
                    </div>
                    <div>
	                    <img src={phone} alt="app development"/>
	                    <h2>App Development</h2>
	                    <p>{this.props.t('home.app')}</p>
                    </div>
                    <div>
	                    <img src={router} alt="back-ends"/>
	                    <h2>Custom back-end applications</h2>
	                    <p>{this.props.t('home.backend')}</p>
                    </div>
                    <div>
	                    <img src={computer} alt="desktop"/>
	                    <h2>Windows Desktop Applications</h2>
	                    <p>{this.props.t('home.desktop')}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default translate(Services);
