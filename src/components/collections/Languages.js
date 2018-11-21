import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import LanguageGrid from "../LanguageGrid";
import html5 from "../../images/languages/html5.png";
import css3 from "../../images/languages/css3.png";
import js from "../../images/languages/js.png";
import java from "../../images/languages/java.png";

const languages = [
    {
        image: html5,
        name: "HTML5",
    },
    {
        image: css3,
        name: "CSS3",
    },
    {
        image: js,
        name: "JavaScript",
    },
    {
        image: java,
        name: "Java",
    }
];

class Languages extends Component {
    render() {
        return (
            <div className="portfolio-wrapper">
                <Fade bottom>
                    <LanguageGrid items={languages}/>
                </Fade>
            </div>
        );
    }
}

export default Languages;