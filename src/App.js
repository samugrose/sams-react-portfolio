import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import About from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container d-flex flex-column align-items-center justify-content-center flex-wrap">
          <Route exact path = "/" component={About} />
          <Route exact path="/portfolio" component={Project} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
