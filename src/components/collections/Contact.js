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
		image: phone,
		service: "phone",
		buttons: [
			{
				text: "06 416 333 58",
				href: "tel:0641633358",
				fa: ["fas", "phone"]
			},
			{
				text: "WhatsApp",
				href: "https://wa.me/31641633358",
				fa: ["fab", "whatsapp"]
			}
		]
	},
	{
		image: social,
		service: "social",
		buttons: [
			{
				text: "Facebook",
				href: "http://m.me/asrrtech",
				fa: ["fab", "facebook"]
			},
			{
				text: "LinkedIn",
				href: "https://www.linkedin.com/company/asrr/",
				fa: ["fab", "linkedin"]
			}
		]
	},
	{
		image: mail,
		service: "mail",
		buttons: [
			{
				text: "contact@asrr.nl",
				href: "mailto:contact@asrr.nl",
				fa: ["fas", "envelope"]
			}
		]
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