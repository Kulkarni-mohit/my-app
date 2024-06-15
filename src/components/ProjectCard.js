import React from 'react';
import './ProjectCard.css';


const ProjectCard = ({ title, description, tags, imageUrl, githubUrl }) => {
    return (
        <div className="project-card">
            <div className="project-description">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-button">
                    View Code
                </a>
            </div>
            <div className="project-image">
                <iframe width="560" height="315" src={imageUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default ProjectCard;
