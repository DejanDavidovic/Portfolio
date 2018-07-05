import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <div>
            <Route exact path = '/' component={Home} />
            <Route exact path = '/contact' component={Contact} />
            <Route exact path = '/projects' component={Projects} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
