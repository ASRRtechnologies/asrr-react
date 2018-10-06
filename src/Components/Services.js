import React, {Component} from "react";
import laptop from "../images/services/laptop.svg";
import router from "../images/services/router.svg";
import computer from "../images/services/computer.svg";
import phone from "../images/services/phone.svg";

class Services extends Component {
    render() {
        return (
            <div class="clients-wrapper">
                <div>
                    <h1>We specialize in the following services</h1>
                </div>

                <div className="flex-container">
                    <div>
	                    <img src={laptop}/>
                        <h1>Webdesign</h1>
                        <p>Responsive and beautiful websites, like the one you're on now. From the ground up, using html5, css, frameworks such as ReactJS, or choose one of our existing templates.</p>
                    </div>
                    <div>
	                    <img src={phone}/>
                        <h1>App Development</h1>
                        <p>We can develop both Android an IOS apps that have seamless integrations to your our our custom back-end.</p>
                    </div>
                    <div>
	                    <img src={router}/>
                        <h1>Custom back-end applications</h1>
                        <p>The back-ends we deliver are Rest-ful, meaning that one backend can be used for your website, app and desktop application. We use Java, Spring, Spring-Boot and SQL.</p>
                    </div>
                    <div>
	                    <img src={computer}/>
                        <h1>Windows Desktop Applications</h1>
                        <p>We can create beautiful custom desktop applications using C#, to automate and speed up complex operations.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;
