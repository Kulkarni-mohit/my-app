import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Portfolio/>
      <Footer/>
    </div>
  );
};

export default App;
