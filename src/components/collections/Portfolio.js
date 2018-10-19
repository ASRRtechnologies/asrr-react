import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Landing from "../Landing";
import blue from "../../images/backgrounds/midblue.svg";
import red from "../../images/backgrounds/lowpoly.jpg";
import orange from "../../images/backgrounds/orange.svg";

import portfolio from "../../images/sectionimages/portfolio.png"
import Websites from "../portfolio/Websites";

import kroontje from "../../images/portfolio/kroontje.png";
import moves4vitality from "../../images/portfolio/m4v.png";
import BusinessCases from "../portfolio/BusinessCases";
import ClientGrid from "../ClientGrid";
import Achievements from "../portfolio/Achievements";


var websites = [
    {
        name: "Kroontje",
	    image: kroontje,
	    url: "www.hetkroontjeweebosch.nl"
    },
    {
        name: "Moves4Vitality",
	    image: moves4vitality,
	    url: "www.moves4vitality.nl"
    },
    {
        name: "Milanotassen",
	    image: kroontje,
	    url: "milanotassenhaagsemarkt.nl"
    },
    {
        name: "TheWindowShop",
	    image: kroontje,
	    url: "asrr.nl/portfolio/samples/thewindowshop/index.html"
    },
    {
        name: "MustiqueSuites",
	    image: kroontje,
	    url: "mustiquesuites.com"
    },
	{
		name: "ASRR Old",
		url: "asrr.nl"
	}
];

var desktop = [
    {
	    name: "FORM",
	    url: "form.nl"
    }, {
		name: "MAPPER",
		url: "mapper.nl"
	}
];

class Portfolio extends Component {
    render() {
        return (
	        <div className="portfolio-wrapper">
                <Fade bottom>
	                <Landing header="portfolio.headline" subtitle="portfolio.subtitle" background={blue}
	                         image={portfolio} />
                </Fade>
                <Fade bottom>
	                <ClientGrid headline="portfolio.clientHeadline" subtitle="portfolio.clientSubtitle"/>
                </Fade>
                <Fade bottom>
                    <Achievements/>
                </Fade>
                <Fade bottom>
                    <BusinessCases/>
                </Fade>
                <Fade bottom>
	                <Websites section="portfolio.websites" items={websites} background={orange}/>
                </Fade>
                <Fade bottom>
                    <Websites section="portfolio.desktop" items={desktop} background={red}/>
                </Fade>
            </div>
        );
    }
}

export default Portfolio;