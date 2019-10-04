import React, {Component} from "react";
import AOS from "aos";
// import developer from "../../assets/images/home/developer-browser.svg";
import InputBox from "../shared/InputBox/InputBox";


class Section5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            message: "",
        };
    }

    componentDidMount() {
        AOS.init();
    }

    handleChange = (name, message) => {
        this.setState({[name]: message});
        console.log(this.state);
    };

    render() {

        const services = {
            title: "Get in touch with us.",
            text: "See what we can mean for you and your company"
        }

        return (
            <div className="section-container beautiful-grey section-padding">
                <div className="section-wrapper flex">
                    <div className="section-cover-text beautiful-grey">
                        <div className="section-contact">
                            <h1 data-aos="fade-right" data-aos-easing="ease-in-out"
                                data-aos-anchor-placement="top"
                                data-aos-duration="600">Get in touch</h1>
                            <p data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out"
                               data-aos-anchor-placement="top"
                               data-aos-duration="600">
                                Send us a message with your questions
                                or stop by and say hi.
                            </p>
                            <InputBox getValue={this.handleChange} placeholder="ASRR" name="name" title="name"/>
                            <InputBox getValue={this.handleChange} placeholder="ASRR Tech" name="email" title="email"/>
                            <textarea
                                rows={this.state.rows}
                                value={this.state.value}
                                placeholder={'message'}
                                className={'textarea'}
                                onChange={e => this.handleChange("message", e.target.value)}
                            />
                            <div data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease-in-out"
                                 data-aos-anchor-placement="top"
                                 data-aos-duration="600" className="section-button">
                                <p>Send</p>
                            </div>
                        </div>
                    </div>
                    <div className="mapouter">
                        <div className="map-wrapper">
                            <iframe id="map"
                                    src="https://maps.google.com/maps?q=veraartlaan%2012&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section5;
