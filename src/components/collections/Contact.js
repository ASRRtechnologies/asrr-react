import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Landing from "../Landing";
import midblue from "../../images/backgrounds/midblue.svg";
import team from "../../images/sectionimages/server.svg";


class Contact extends Component {
    render() {
        return (
            <div>
                <Fade bottom>
	                <Landing header="contact.headline" subtitle="contact.subtitle" background={midblue} image={team}/>
                </Fade>
            </div>
        );
    }
}

export default Contact;