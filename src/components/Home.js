import React from 'react';
import './Home.css';
import profileImage from '../img/___.jpg'; 

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home__content">
                <h1>Hi, I'm <br /><span>Mohit </span></h1>
                <h3>Computer Engineer</h3>
                <p>Aspiring Computer Science Engineer with hands-on experience in AI-ML, cloud services and Software development.</p>
                <button
                    className="home__contact-button"
                    onClick={() => window.location.href = "mailto:kulkarnimohit24@gmail.com"}
                >
                    <b>📧</b> Contact Me <span>&#9654;</span>
                </button>
            </div>
            <div className="home__image-container">
                <img src={profileImage} alt="Mohit Kulkarni" className="home__image" />
            </div>
            <div className="home__socials">
                <a href="http://www.linkedin.com/in/mohitkulkarni24" className="home__social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Kulkarni-mohit" className="home__social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://medium.com/@kulkarnimohit24" className="home__social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-medium"></i>
                </a>
                <a href="https://x.com/mohitkulka51503" className="home__social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
            <div className="home__scroll-down">
                <a href="#about" className="header__nav-link">Scroll Down <span>&#8595;</span></a>
            </div>
        </section>
    );
}

export default Home;
