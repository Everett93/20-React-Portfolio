import React, { Component } from 'react';
// import './App.css';
import Header from "./components/Header";

import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Navbar />
          <div id="colorlib-main">
            <Header />
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
