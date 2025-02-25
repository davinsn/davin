import React from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Element name="home" className="section">
        <Home />
      </Element>

      <Element name="about" className="section">
        <About />
      </Element>

      <Element name="projects" className="section">
        <Projects />
      </Element>
    </div>
  );
}

export default App;
