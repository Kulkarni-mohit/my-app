import React from 'react';
import ProjectCard from './ProjectCard';
import './Portfolio.css';

const projects = [
    {
        title: ' RAG Based Chatbot',
        description: 'Developed a RAG-based chatbot using the LlamaIndex framework and LLama-2 to automate responses for Ackocar insurance queries. Additionally, constructed a vector store by scraping Acko website data, vectorizing text with LLama-2 embeddings, and indexing documents for efficient search.',
        tags: ['Python', 'LlamaIndex', 'LLMs', 'Flask', 'Azure', 'Docker'],
        imageUrl: "https://www.youtube.com/embed/yaAcJ0pui7E?si=uAxy2JyzZKZ6QFQb", 
        githubUrl: ''
    },
    {
        title: ' SNAP2COOK GURU',
        description: 'Developed a dynamic web application in Streamlit for vegetable image classification using CNN. Integrated Google’s PaLM2 LLM model to generate personalized recipes based on identified vegetables and user preferences',
        tags: ['Python', 'TensorFlow', 'CNN','Image Classification', 'NLP','Streamlit'],
        imageUrl: "https://www.youtube.com/embed/qzK-OQwt8F0?si=rq21QF_KJBSN_oru", 
        githubUrl: 'https://github.com/Kulkarni-mohit/Recipe_Generator_'
    },
    {
        title: '  COURSE RECOMMENDATION SYSTEM',
        description: 'Developed a machine learning-based course recommendation system employing collaborative filtering algorithms. Key features include displaying trending courses based on user ratings and allowing users to input a course, receiving recommendations for five other courses using collaborative filtering.',
        tags: ['Python', 'Scikit-learn','Collaborative Filtering','FastAPI','Streamlit'],
        imageUrl: "https://www.youtube.com/embed/jRjNXc04AUI?si=5dOJoBORV9ZAaFw_", 
        githubUrl: 'https://github.com/Kulkarni-mohit/Course_Recommendation_System'
    },
    {
        title: 'Vidyarthi Sahayyak Samiti App',
        description: 'Developed and published the "Vidyarthi Sahayyak Samiti" Android app for hostel management using Flutter and Firebase, enhancing operations for a 1000+ student hostel chain.',
        tags: ['Flutter','Firebase','Cloud Firestore (NoSQL Database)','Cloud Storage '],
        imageUrl: "https://www.youtube.com/embed/gN5AxBTXOqs?si=qJCAcqbChmZ3DT1W", 
        githubUrl: ''
    },
    {
        title: '  PREDICTIVE ANALYSIS OF IPO LISTING PRICE',
        description: 'Developed and implemented an XGBoost regression model for IPO listing price prediction using a dataset of NSE-listed IPOs from 2010–2021. Achieved a high-performing model with a low Mean Squared Error and an R2 score of 0.9 on test data, providing valuable insights for investors to estimate potential listing prices of upcoming IPOs based on issue details.',
        tags: ['Python', 'XGBoost Regressor','Streamlit'],
        imageUrl: '', 
        githubUrl: 'https://github.com/Mohit-Kulkarni1/IPO-Listing-Price-Prediction'
    },
    {
        title: '   FINE TUNING LLM',
        description: 'Implemented sentiment analysis using a fine-tuned DistilBERT model on the IMDB movie review dataset. Utilized HuggingFace Transformers for implementation. The trained model can classify whether a given text contains positive or negative sentiment.',
        tags: ['Python', 'HuggingFace Transformer', 'LangChain'],
        imageUrl: '', 
        githubUrl: 'https://github.com/Kulkarni-mohit/Fine-tuning-sentiment-analysis'
    },
    {
        title: '   Face Recognition and Attendance System',
        description: 'Developed an AI-based Face Detection and Attendance System, optimizing attendance tracking and Excel data recording. Used Transfer learning with model architecture of VGG16',
        tags: ['Python', 'TensorFlow', 'CNN','Computer Vision'],
        imageUrl: '', 
        githubUrl: 'https://github.com/Kulkarni-mohit/Face-Recognition-and-Attendance-System'
    },
    
    {
        title: 'Joshi Mills App',
        description: 'Developed a user-friendly Android app for Joshi Flour Mills, efficiently managing customer records and payment details. Utilized Flutter and Firebase technologies for seamless development, ensuring smooth functionality and easy access to essential business data.',
        tags: ['Flutter','Firebase','Cloud Firestore (NoSQL Database)'],
        imageUrl: '', 
        githubUrl: ''
    },
    {
        title: 'Algorithmic Electronics Project',
        description: 'Developed an interactive language learning game for children using Python, Pygame, and OpenCV, featuring hand tracking for gesture-based interaction. Implemented a math-based balloon-popping game with cvzone HandTrackingModule, enhancing engagement with real-time webcam integration.',
        tags: ['Python','Computer Vision'],
        imageUrl: '', 
        githubUrl: 'https://github.com/Kulkarni-mohit/Algorithmic-Electronics'
    },
    {
        title: 'ATM Management System',
        description: 'Developed a Smart ATM Manager Desktop App using Python, with MySQL for database management. Features include withdrawal, deposit, balance checking, and transaction history display, with an added user-centric account creation feature within the ATM interface. ',
        tags: ['Python','MySQL','Tkinter'],
        imageUrl: '', 
        githubUrl: 'https://github.com/Kulkarni-mohit/ATM_Management_System'
    },
];

const Portfolio = () => {
    return (
        <div className="portfolio" id = 'portfolio'>
            <h2 className="portfolio-title">My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        imageUrl={project.imageUrl}
                        githubUrl={project.githubUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
