import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <div className="container d-flex flex-column align-items-center justify-content-center flex-wrap">
      <Project />
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
