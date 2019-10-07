import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import html5 from '../assets/images/languages/html5.png'
import css3 from '../assets/images/languages/css3.png'
import js from '../assets/images/languages/js.png'
import java from '../assets/images/languages/java.png'
import csharp from '../assets/images/languages/csharp.png'

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
    },
    {
        image: csharp,
        name: "C#",
    }
];
// const frameworks = [
//     {
//         image: html5,
//         name: "HTML5",
//     },
//     {
//         image: css3,
//         name: "CSS3",
//     },
//     {
//         image: js,
//         name: "JavaScript",
//     },
//     {
//         image: java,
//         name: "Java",
//     },
//     {
//         image: csharp,
//         name: "C#",
//     }
// ];

class Languages extends Component {
    render() {
        return (
            <div className="portfolio-wrapper">
                <Fade bottom>
                    {/*<LogoGrid className="white" items={frameworks}/>*/}
                </Fade>
            </div>
        );
    }
}

export default Languages;