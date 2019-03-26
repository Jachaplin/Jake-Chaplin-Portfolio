import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
