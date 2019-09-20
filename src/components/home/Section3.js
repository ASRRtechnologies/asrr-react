import React, {Component} from "react";
import AOS from "aos";
import Dashboard from "../../assets/images/services/icons/dashboard-icon.svg"
import Server from "../../assets/images/services/icons/database-icon.svg"
import WebDesign from "../../assets/images/services/icons/webdesign-icon.svg"
import Desktop from "../../assets/images/services/icons/desktop-icon.svg"

import ValueCards from "./ValueCards";
import NavigateButton from "./NavigateButton";

class Section3 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        AOS.init();
    }


    render() {
        const services = [
            {
                title: "Power BI Dashboard",
                text: "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. " +
                    "Lorem Ipsum is de standaard proeftekst in",
                image: Dashboard
            },
            {
                title: "Server Design",
                text: "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. " +
                    "Lorem Ipsum is de standaard proeftekst in",
                image: Server
            },
            {
                title: "Webdesign",
                text: "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. " +
                    "Lorem Ipsum is de standaard proeftekst in",
                image: WebDesign
            },
            {
                title: "Desktop Applications",
                text: "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. " +
                    "Lorem Ipsum is de standaard proeftekst in",
                image: Desktop,
            },


        ]

        return (
            <div className="section-container">
                <div className="section-wrapper">
                    <div className="section-text">
                        <h2>Services</h2>
                        <p style={{width: "80%"}}> zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
                            bedrijfstak sinds de 16e eeuw zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
                            bedrijfstak sinds de 16e eeuw</p>
                        <NavigateButton to="services" text="Learn more"/>
                    </div>

                    <div className="section-services-grid">
                        {services.map((data, i) => {
                            return <React.Fragment>
                                <ValueCards height={data.height} key={i} text={data.text} image={data.image}
                                            title={data.title}/>
                            </React.Fragment>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Section3;
