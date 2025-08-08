import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker} from '@fortawesome/free-brands-svg-icons';
import {faPuzzlePiece, faCode} from '@fortawesome/free-solid-svg-icons';

import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Python",
    "Django",
    "Spring Boot",
    "JEE",
    "JPA",
    "Hibernate",
    "SQL",
    "PostgreSQL",
    "REST",
    "SOAP",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub/GitLab",
    "Jenkins",
    "Maven",
    "Apache ANT",
    "Docker",
    "Linux",
    "Selenium",
    "Playwright",
    "BeautifulSoup",
    "Web Scraping"
];

const labelsThird = [
    "Agile",
    "SAFe",
    "Cycle en V",
    "UML",
    "Merise",
    "Design Patterns",
    "Jira",
    "Confluence"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                        <p>Once the application is built, I implement DevOps testing, CI/CD pipelines, and deployment automation to ensure each project is production-ready and successfully delivered.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                        <FontAwesomeIcon icon={faPuzzlePiece} size="3x"/>
                    <h3>Methodologies & Modeling</h3>
                        <p>I apply proven methodologies and modeling techniques to design smart, scalable solutions. My experience ensures efficient development and informed decision-making across projects.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;