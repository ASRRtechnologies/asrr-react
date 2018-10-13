import React, {Component} from 'react';
import Fade from 'react-reveal';
import Landing from "../Landing";
import purple from "../../images/backgrounds/purple.svg"
import ServiceGrid from "../services/ServiceGrid";

const services = [
    {
        logo: "",
        service: "Webdevelopment",
        description: "To create beautiful responsive "
    },
    {
        logo: "",
        service: "App development",
        description: "lalala ldldldl dldldldl dlldl"
    }
];

class Services extends Component {
    render() {
        return (
            <div>
                <Fade bottom>
                    <Landing header="services.headline" background={purple}/>
                </Fade>
                <Fade bottom>
                    <ServiceGrid section="service.section" items={services}/>
                </Fade>
            </div>
        );
    }
}

export default Services;