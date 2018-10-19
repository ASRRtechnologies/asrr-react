import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Landing from "../Landing";
import orange from "../../images/backgrounds/orange.svg";
import red from "../../images/backgrounds/lowpoly.jpg";
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
        image: kroontje
    },
    {
        name: "Moves4Vitality",
        image: moves4vitality
    },
    {
        name: "Milanotassen",
        image: kroontje
    },
    {
        name: "TheWindowShop",
        image: kroontje
    },
    {
        name: "MustiqueSuites",
        image: kroontje
    }
];

var desktop = [
    {
        name: "DesktopKroontje",
        image: kroontje
    },
    {
        name: "Moves4Vitality",
        image: moves4vitality
    },
    {
        name: "LALALALA",
        image: kroontje
    },
    {
        name: "TheWindowShop",
        image: kroontje
    },
    {
        name: "MustiqueSuites",
        image: kroontje
    }
];

class Portfolio extends Component {
    render() {
        return (
	        <div className="portfolio-wrapper">
                <Fade bottom>
	                <Landing header="portfolio.headline" subtitle="portfolio.subtitle" background={orange}
	                         image={portfolio} />
                </Fade>
                <Fade bottom>
	                <ClientGrid headline="portfolio.clientheadline" subtitle="portfolio.clientsubtitle"/>
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