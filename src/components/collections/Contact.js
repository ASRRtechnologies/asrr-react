import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Landing from "../Landing";
import green from "../../images/backgrounds/green.svg";
import contact from "../../images/sectionimages/contact.svg";

const button =
	{
		text: "buttons.contact",
		href: "mailto:contact@asrr.nl",
		fa: ["fas", "envelope"]
	};


class Contact extends Component {
    render() {
        return (
            <div>
                <Fade bottom>
	                <Landing header="contact.headline" subtitle="contact.subtitle" background={green} image={contact}
	                         button={button}/>
                </Fade>
            </div>
        );
    }
}

export default Contact;