import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact,  faPython,faAndroid } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import second from '../assets/images/Second.jpeg';
import first from '../assets/images/First.jpeg';
import third from '../assets/images/Third.jpeg';
import fourth from '../assets/images/Fourth.jpeg';




const labelsFirst = [
    "React",
    "Angular",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "MySQL",
    "MongoDB",


    
];

const labelsSecond = [
    
    "React Native",
    "Python",
    "Git",
    'Java',
    'Django',
    'SDLC',

];

const labelsThird = [
    "Python",
    "SQL",
    "CI/CD",
    "Fast Api",
    "Docker",
    "Apachi Spark",
    
];
const labelsFourth = [
    "CI/CD",
    "Agile",
    "Scrum",
    "Git",
    "GitHub",
    
    
];
const labelsFive = [
    "Python",
    "NumPy",
    "Pandas",
    "Django",
    "Api",
    
    
];
const labelsSix = [
    "Satellite Technology",
    "Remote Sensing",
    "Robotics in space",
    "AIML",
    
    
    
];
const labelsPython = [
    "Python",
    "NumPy",
    "Pandas",
    "AIML",
    "Matplotlib",
    "TensorFlow & Keras",
  
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Developer</h3>
                    <p>I have built many web applications from scratch using modern technologies such as React, SQL and Node.js. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                   
                    <h3>Software & App Developer</h3>
                    <p>As a Developer , I Designs, develops, and maintains applications for mobile and desktop platforms using modern technologies. They specialize in frontend and backend development, ensuring seamless user experiences and efficient system functionality.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Science</h3>
                    <p>As A Data Scientist, I analyzes complex data to extract insights, build predictive models, and drive data-driven decisions. They specialize in machine learning, statistics, and data visualization to solve real-world problems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="skills-container">
            <h1>Certifications</h1>
            <div className="skills-grid">
            <div className="skill">
                <a href="https://drive.google.com/file/d/1xfyBYzieysJrm1VKs6DbSeM-98dFFvTq/view?usp=sharing" target="_blank" rel="noreferrer"><img src={first} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1xfyBYzieysJrm1VKs6DbSeM-98dFFvTq/view?usp=sharing" target="_blank" rel="noreferrer"><h3>Machine Learning A-Z: AI & Python </h3></a>
                    
                    <h4>Learning Hub : Udemy</h4>
                    <p>This course provided me a comprehensive introduction to Machine Learning (ML), covering both theoretical concepts and practical implementation using Python. It focuses on Supervised, Unsupervised, and Reinforcement Learning while utilizing key ML libraries like Scikit-Learn, TensorFlow, and Pandas.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsPython.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                <a href="https://drive.google.com/file/d/1mu--9OxzeXseHAbZZMjCigYnd6xuGdsf/view?usp=sharing" target="_blank" rel="noreferrer"><img src={second} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1mu--9OxzeXseHAbZZMjCigYnd6xuGdsf/view?usp=sharing" target="_blank" rel="noreferrer"><h3>Overview of Agile & DevOps</h3></a>
                    
                    <h4>Learning Hub : Infosys-Springboard</h4>
                    <p>This course gave me a clear perspective on how Agile and DevOps work together to enhance software development efficiency. I now have a better understanding of how Agile fosters collaboration, while DevOps ensures rapid and reliable software delivery through automation and continuous monitoring.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                <a href="https://drive.google.com/file/d/1LImvL2JfhfuD5dES1Wb3RKDWuyFp9Lou/view?usp=sharing" target="_blank" rel="noreferrer"><img src={third} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1LImvL2JfhfuD5dES1Wb3RKDWuyFp9Lou/view?usp=sharing" target="_blank" rel="noreferrer"><h3>Python Programming- From Basics To Advanced Level</h3></a>

                    <h4>Learning Hub : Udemy</h4>
                    <p>This course strengthened my Python programming skills, enabling me to write efficient, scalable, and maintainable code. It also introduced me to real-world applications in automation, web development, and data science.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFive.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                <a href="https://drive.google.com/file/d/1cDOIia8lVAQvs67Cy5YetJv5feXOarx3/view?usp=sharing" target="_blank" rel="noreferrer"><img src={fourth} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1cDOIia8lVAQvs67Cy5YetJv5feXOarx3/view?usp=sharing" target="_blank" rel="noreferrer"><h3>Space Science And Technology </h3></a>
                  
                    <h4>Learning Hub : Department Of Space-ISRO</h4>
                    <p>This Training Program equip with knowledge and practical skills in space exploration, satellite technology, Remote Sensing astrophysics and aerospace engineering Principles.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSix.map((label, index) => (
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