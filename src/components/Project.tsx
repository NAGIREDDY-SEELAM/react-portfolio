import React from "react";

import mock07 from '../assets/images/job.jpg';
import mock08 from '../assets/images/farm.jpg';
import mock09 from '../assets/images/voice.jpg';
import home from '../assets/images/community.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/NAGIREDDY-SEELAM/Capstone" target="_blank" rel="noreferrer"><img src={home} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/NAGIREDDY-SEELAM/Capstone" target="_blank" rel="noreferrer"><h2>Community App-React Native</h2></a>
                <a href="https://drive.google.com/file/d/1AZrY6WUTRDTJiOO_DFkWAxUyOHJU69O5/view" target="_blank" rel="noreferrer"><h2>Demo video</h2></a>

                <p>- Designed and implemented Web , Android and IOS Platforms supported App<br></br>
- Specifications include search for local jobs, discover nearby businesses, and stay informed with real-time weather updates and local news.<br></br>
- Connect with friends, neighbors, and businesses through built-in chat and stay updated on community events.<br></br>
Technologies Used:React and React Native as Frontend, Node.Js and Express.Js as Backend and Firebase and Mongo DB for data Storage.

</p>
            </div>
            <div className="project">
                <a href="https://nagireddy-seelam.github.io/voice-operating-email/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://nagireddy-seelam.github.io/voice-operating-email/" target="_blank" rel="noreferrer"><h2>Voice Operating Email-Python</h2></a>
                <p>- Developed a Voice based operating Email using python <br></br>
- Technology: Python, HTML, CSS, JavaScript ,PHP, OpenCV<br></br>
- Role: web developer and python developer<br></br>
- The application will be a web-based application for visually impaired persons using IVR Interactive voice response. The system will prompt the user with voice commands to perform certain actions and the user will respond to the same.</p>
            </div>
            <div className="project">
                <a href="https://nagireddy-seelam.github.io/farmer/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://nagireddy-seelam.github.io/farmer/" target="_blank" rel="noreferrer"><h2>Farmers Portal</h2></a>
                <p>- This Farmer Portal facilitates a single window solution to the farmers and stakeholders to disseminate the information about the Government schemes,market rates, Seed information, Farm Machinery, Fertilizers, soil info,weather information, advices ,problems and solutions in farming sector. <br></br>

- It also provides easy portal access by providing various required Resources for government schems, weather information, market rates and other relevant links.</p>
            </div>
            <div className="project">
                <a href="https://nagireddy-seelam.github.io/job-c/index.html" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://nagireddy-seelam.github.io/job-c/index.html" target="_blank" rel="noreferrer"><h2>Job Portal</h2></a>
                <p>- Developed an API  based Job Portal<br></br>
- Part-Time Job Employment and Services Portal<br></br>
- Technology : React ,HTML, CSS, JavaScript ,PHP, API<br></br>
- The goal of this project is to create a dynamic one-stop web application that offer a unique platform that serves both job seekers looking for part-time employment and customers in need of services provided by part-time employees.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;