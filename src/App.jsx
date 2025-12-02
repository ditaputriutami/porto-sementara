import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
