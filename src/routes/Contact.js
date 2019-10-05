import React, {Component} from 'react';
import mail from "../assets/images/contact/mail.svg";
import phone from "../assets/images/contact/mobile.svg";
import social from "../assets/images/contact/social.svg";
import landing from "../assets/images/contact/landing-min.png";
import LandingImage from "../components/shared/landing/LandingImage";
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
				<LandingImage title="contact" image={landing}/>
			</div>
		);
	}
}

export default Contact;
