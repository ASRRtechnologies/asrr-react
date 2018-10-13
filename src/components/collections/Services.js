import React, {Component} from 'react';
import Fade from 'react-reveal';
import Landing from "../Landing";
import purple from "../../images/backgrounds/purple.svg"
import ServiceGrid from "../services/ServiceGrid";

const services = [
    {
        logo: "",
        service: "web",
    },
    {
        logo: "",
        service: "app",
    }
];

class Services extends Component {
    render() {
        return (
            <div>
                <Fade bottom>
                    <Landing header="services.headline" subtitle="home.subtitle" background={purple}/>
                </Fade>
                <Fade bottom>
                    <ServiceGrid section="services.section" items={services}/>
                </Fade>
            </div>
        );
    }
}

export default Services;