import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Landing from "../Landing";
import midblue from "../../images/backgrounds/midblue.svg";
import team from "../../images/sectionimages/team.png"
import Websites from "../portfolio/Websites";

import kroontje from "../../images/portfolio/kroontje.png";
import moves4vitality from "../../images/portfolio/m4v.png";


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

class Portfolio extends Component {
    render() {
        return (
            <div>
                <Fade bottom>
	                <Landing header="portfolio.headline" subtitle="portfolio.subtitle" background={midblue} image={team}/>
                </Fade>
                <Fade bottom>
	                <Websites section="about.founders" items={websites}/>
                </Fade>
            </div>
        );
    }
}

export default Portfolio;