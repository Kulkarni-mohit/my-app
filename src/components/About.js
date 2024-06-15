import React from 'react';
import './About.css';
import aboutImage from '../img/profile.jpg'; 

const About = () => {
    return (
        <section className="about" id="about">
            <h2 className="about__title">About Me</h2>
            <h3 className="about__subtitle">My Introduction</h3>
            <div className="about__container">
                <div className="about__image-container">
                    <img src={aboutImage} alt="Mohit Kulkarni" className="about__image"/>
                </div>
                <div className="about__content">
                    <p>
                    I'm Mohit Kulkarni, a tech enthusiast driven by a passion for technology and innovation. I have completed my third year and will soon enter my final year of Bachelor of Engineering at AISSMS Institute of Information Technology in Pune. I have proficiency in a range of advanced technologies, including AI, Machine Learning, Deep Learning, GenAI, NLP, Computer Vision, and MLOps. My technical skill set also extends to mobile app development, MERN development, and cloud services.<br /><br /> I am committed to staying updated with the latest tech trends and hold several certifications, including AWS Certified Solutions Architect badge and Cloud Essentials Badge. Additionally, I have earned certifications in MLOps from Duke University and Deep Learning from DeepLearning.AI, continuously expanding my expertise. I have also published a research paper at the IEEE Xplore.<br /><br /> Beyond the tech world, I am a big cricket fan and enjoy supporting Team India.
                    </p>
                    <div className="about__stats">
                        <div className="about__stat">
                            <h4>1</h4>
                            <p>Year of experience</p>
                        </div>
                        <div className="about__stat">
                            <h4>8+</h4>
                            <p>Projects completed</p>
                        </div>
                        <div className="about__stat">
                            <h4>1</h4>
                            <p>Research Paper</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
