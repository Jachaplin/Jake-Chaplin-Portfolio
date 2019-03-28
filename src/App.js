import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
