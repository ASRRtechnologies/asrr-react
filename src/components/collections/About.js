import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Landing from "../home/Landing";
import lowPolyOrange from "../../images/backgrounds/lowpolyorange.svg";
import team from "../../images/sectionimages/team.png"
import Team from "../about/Team";

const founders = [

        {
            name: "Amar",
            fullName: "Amar Ramdas",
            jobTitle: "CEO",
            background: "Applied Physics",
            tasks: "Project lead, Front-end, back-end",
            languages: "C#, JS, HTML, CSS, MATLAB, VBA, .NET",
            github: "Amar97",
            linkedin: "https://www.linkedin.com/in/amarramdas/"
        },

        {
            name: "Satyam",
            fullName: "Satyam Mohan",
            jobTitle: "CTO",
            background: "Computer Science",
            tasks: "Back-end, Technology Research, Reverse Engineering",
            languages: "Java, Spring, Spring-Boot, C, C#, JS",
            github: "Satyam126",
            linkedin: ""
        },

    {
        name: "Reangelo",
        fullName: "Ré-Angelo Jarvis",
        jobTitle: "CMO",
        background: "Biofarmaceutical Science",
        tasks: "Marketing, App-Development",
        languages: "JS, ReactJS, React-Native, Python",
        github: "HesusDios",
        linkedin: ""
    },

    {
        name: "RAyel",
        fullName: "Rayel Hardwarsing",
        jobTitle: "CFO",
        background: "Econometrics",
        tasks: "Finances, Data Analysis",
        languages: "R, C#, MatLab, Python",
        github: "RayelH",
        linkedin: ""
    },


    ]
;

class About extends Component {
    render() {
        return (
            <div>
                <Fade bottom>
                    <Landing header="about.headline" background={lowPolyOrange} image={team}/>
                </Fade>
                <Fade bottom>
                    <Team section="about.founders" items={founders}/>
                </Fade>
            </div>
        );
    }
}

export default About;