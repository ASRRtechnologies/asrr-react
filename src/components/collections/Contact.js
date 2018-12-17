import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Landing from "../Landing";
import green from "../../images/backgrounds/green.svg";
import contact from "../../images/sectionimages/contact.svg";
import ContactMethods from "../contact/ContactMethods";
import mail from "../../images/contact/mail.svg";
import phone from "../../images/contact/mobile.svg";
import social from "../../images/contact/social.svg";

// const button =
// 	{
// 		text: "buttons.contact",
// 		href: "mailto:contact@asrr.nl",
// 		fa: ["fas", "envelope"]
// 	};

const services = [
	{
		image: mail,
		service: "mail",
	},
	{
		image: phone,
		service: "phone",
	},
	{
		image: social,
		service: "social"
	}
];

class Contact extends Component {
    render() {
        return (
            <div>
                <Fade bottom>
	                <Landing header="contact.headline" subtitle="contact.subtitle" background={green} image={contact}
	                />
	                <ContactMethods items={services}/>
                </Fade>
            </div>
        );
    }
}

export default Contact;