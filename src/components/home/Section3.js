import React, {Component} from "react";
import AOS from "aos";
import Dashboard from "../../assets/images/services/icons/dashboard-icon.svg"
import Server from "../../assets/images/services/icons/database-icon.svg"
import WebDesign from "../../assets/images/services/icons/webdesign-icon.svg"
import Desktop from "../../assets/images/services/icons/desktop-icon.svg"
import developer from "../../assets/images/home/programming.jpg";
import management from "../../assets/images/home/management.jpg";
import innovative from "../../assets/images/home/nasa.jpg";

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
                image: management,
                delay:"200ms",
                key:"management"
            },
            {
                title: "Server Design",
                text: "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. " +
                    "Lorem Ipsum is de standaard proeftekst in",
                image: developer,
                delay:"400ms",
                key:"Server"
            },
            {
                title: "Webdesign",
                text: "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. " +
                    "Lorem Ipsum is de standaard proeftekst in",
                image: innovative,
                delay:"500ms",
                key:"Webdesign"
            },
            {
                title: "Desktop Applications",
                text: "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. " +
                    "Lorem Ipsum is de standaard proeftekst in",
                image: developer,
                delay:"600ms",
                key:"Desktop applications"

            },
        ]

        return (
            <div className="section-container">
                <div className="section-wrapper flex-center">
                    <div className="section-services-grid">
                        {services.map((data, i) => {
                            return <div  key={data.key} data-aos="-up" data-aos-delay={data.delay} data-aos-easing="ease-in-out"
                                        data-aos-anchor-placement="top"
                                        data-aos-duration="600">
                                <ValueCards  text={data.text} image={data.image} title={data.title}/>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Section3;
