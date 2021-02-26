import React, { Component } from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ProjectList from './components/ProjectList/ProjectList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <ProjectList />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;