import React from 'react';
import './Project.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Project = () => {
    return (
        <section className="project section">
            <div className="project__bg">
                <div className="project__container container grid">
                    <div className="project__data">
                        <h2 className="project__title">You have a new project ?</h2>
                        <p className="project__description">
                            I would love to chat with you about your project and see how we
                            can work together to create something truly amazing. Let's
                            connect.
                        </p>
                        <a href="#contact" className="button button--flex button--white">
                            Contact Me
                            <i className="uil uil-message project__icon button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
