import React from 'react';
import './VerticalTimeline.css';
import { FaBriefcase } from 'react-icons/fa';

const VerticalTimeline = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <FaBriefcase /> <span>{item.date}</span>
            <div>
              {item.description.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
