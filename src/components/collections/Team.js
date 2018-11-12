import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Landing from "../Landing";
import orange from "../../images/backgrounds/orange.svg";
import team from "../../images/sectionimages/team-orange.svg"
import TeamCards from "../about/TeamCards";

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
	    linkedin: "https://www.linkedin.com/in/satyam-mohan-26188a174/"
    },

    {
        name: "Reangelo",
        fullName: "Ré-Angelo Jarvis",
        jobTitle: "CMO",
        background: "Biofarmacy",
        tasks: "Marketing, App-Development",
        languages: "JS, ReactJS, React-Native, Python",
        github: "HesusDios",
	    linkedin: "https://www.linkedin.com/in/reangelojarvis/"
    },

    {
        name: "RAyel",
        fullName: "Rayel Hardwarsing",
        jobTitle: "CFO",
        background: "Econometrics",
        tasks: "Finances, Data Analysis, Database Design",
        languages: "Java, SQL, R, C#, MatLab, Python",
        github: "RayelH",
	    linkedin: "https://www.linkedin.com/in/rayel-hardwarsing-371b16133/"
    }];

const support = [
    {
        name: "Amy",
        fullName: "Amy Mkrtsjan",
        jobTitle: "HR Advisor",
        background: "Human Resource Management",
        tasks: "Advise on matters around human resources as well as general advise for the company",
        languages: "English, Dutch, Russian",
        linkedin: "https://www.linkedin.com/in/amarramdas/",
	    github: "none"
    },
    {
        name: "Amit",
        fullName: "Amit Ramdas",
        jobTitle: "Marketing Trainee",
        background: "Commercial Economics",
        tasks: "Researching marketing opportunities for the company and contacting potential customers",
        languages: "English, Dutch, Spanish",
        linkedin: "https://www.linkedin.com/in/amitniteshramdas/",
	    github: "none"
    },
    {
        name: "Azat",
        fullName: "Azat Arica",
        jobTitle: "Developer & DB Engineer",
        background: "Electrical Engineering",
        tasks: "Writing code for our projects and designing databases.",
        languages: "English, Dutch",
        linkedin: "https://www.linkedin.com/in/azatarica/",
        github: "azatt"
    }

];

const button =
	{
		text: "Services",
		href: "/Services",
		fa: ["fas", "cogs"]
	};

class Team extends Component {
    render() {
        return (
            <div>
                <Fade bottom>
	                <Landing header="about.headline" subtitle="about.subtitle" background={orange} image={team}
	                         button={button}/>
                </Fade>
                <Fade bottom>
	                <TeamCards id="team" section="about.founders" items={founders}/>
                </Fade>
                <Fade bottom>
	                <TeamCards section="Support" items={support}/>
                </Fade>
            </div>
        );
    }
}

export default Team;