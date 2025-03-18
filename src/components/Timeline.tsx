import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Academic Background</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2020 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Vellore Institute Of Technology -Bhopal</h3>
            <h4 className="vertical-timeline-element-subtitle">B-Tech : Computer Science And Engineering</h4>
            <h4 className="vertical-timeline-element-subtitle">CGPA : 7.81 or 78.1%</h4>
            {/* <p>
            Laid a basic foundation in computing principles, programming, algorithms, and software development covering areas like AI, data structures, networking, databases, and cybersecurity.
            </p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Narayana Junior College-Hyderabad</h3>
            <h4 className="vertical-timeline-element-subtitle">Intermediate -MPC</h4>
            <h4 className="vertical-timeline-element-subtitle">Percentage : 93.4%</h4>
       
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Narayana Best Foundation School</h3>
            <h4 className="vertical-timeline-element-subtitle">1st-10th Class</h4>
            <h4 className="vertical-timeline-element-subtitle">Percentage : 93%</h4>

         
          </VerticalTimelineElement>
    
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;