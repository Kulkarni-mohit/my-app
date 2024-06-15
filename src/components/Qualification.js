import React, { useState } from 'react';
import './Qualification.css';
import { MdWork } from 'react-icons/md';
import { IoMdSchool } from 'react-icons/io';
import VerticalTimeline from './VerticalTimeline';

const Qualification = () => {
    const [activeTab, setActiveTab] = useState('work');

    const toggleTab = (tab) => {
        setActiveTab(tab);
    };

    const timelineItems = [
        {
          title: 'Software Development Intern',
          date: 'Feb 2024 - April 2024',
          description: 'Developed a language learning app for children using computer vision to enhance vocabulary acquisition. Implemented math-based gaming components with Pygame and computer vision libraries to prioritize user engagement and intuitive functionality.',
        },
        {
          title: 'Data Analyst Intern',
          date: 'Dec 2023 - Jan 2024',
          description: 'Created interactive dashboards using Power BI and Google Sheets for data visualization. Led UI Dashboard enhancements, employing statistical methods for data analysis and business report generation.',
        },
        {
          title: 'Junior Backend Developer',
          date: ' May 2023 - Sept 2023',
          description: `Developed and published the "Vidyarthi Sahayyak Samiti" Android app for hostel management using Flutter and Firebase, enhancing operations for a 1000+ student hostel chain.`,
        },
      ];

      const educ = [
        {
            title:"Bachelor of Engineering (B.E.) Computer Engineering",
            date:'2021-2025',
            description:'AISSMS Institute of Information Technology, Pune \n CGPA: 9.43'
        },
        {
            title:"12th CBSE",
            date:'2020-2021',
            description:'Kendriya Vidyalaya, NDA \n 90.2%'
        },
        {
            title:"10th CBSE",
            date:'2018-2019',
            description:'Kendriya Vidyalaya, NDA \n 94%'
        }
      ];

    return (
        <section className="qualification" id="qualification">
            <h2 className="qualification__title">Qualification</h2>
            <h3 className="qualification__subtitle">My personal journey</h3>
            <div className="qualification__tabs">
                <div 
                    className={`qualification__button ${activeTab === 'work' ? 'qualification__active' : ''}`}
                    onClick={() => toggleTab('work')}
                >
                    <MdWork className="qualification__icon" /> Work
                </div>
                <div 
                    className={`qualification__button ${activeTab === 'education' ? 'qualification__active' : ''}`}
                    onClick={() => toggleTab('education')}
                >
                    <IoMdSchool className="qualification__icon" /> Education
                </div>
            </div>

            <div className="qualification__sections">
                <div className={`qualification__content ${activeTab === 'work' ? 'qualification__content-active' : ''}`}>
                   <VerticalTimeline items={timelineItems} />
                </div>

                <div className={`qualification__content ${activeTab === 'education' ? 'qualification__content-active' : ''}`}>
                    <VerticalTimeline items = {educ}/>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
