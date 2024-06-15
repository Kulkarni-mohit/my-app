import React from 'react';
import './Skills.css';
import { FaPython, FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs, FaAws, FaDocker } from 'react-icons/fa';
import { SiFlutter, SiTensorflow, SiScikitlearn, SiMysql, SiMongodb, SiMicrosoftazure, SiPowerbi, SiFirebase } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const Skills = () => {
    const skills = [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'C++', icon: <TbBrandCpp /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Tensorflow', icon: <SiTensorflow /> },
        { name: 'Scikit Learn', icon: <SiScikitlearn /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Azure', icon: <SiMicrosoftazure /> },
        { name: 'AWS', icon: <FaAws /> },
        { name: 'PowerBI', icon: <SiPowerbi /> },
        { name: 'Docker', icon: <FaDocker /> }
    ];

    return (
        <section className="skills" id="skills">
            <h2 className="skills__title">Skills</h2>
            <h3 className="skills__subtitle">My tech stack</h3>
            <div className="skills__grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skills__item">
                        <div className="skills__icon">
                            {skill.icon}
                        </div>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
