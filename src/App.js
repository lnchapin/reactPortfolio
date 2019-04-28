import React, { Component } from 'react';
import './App.css';
import About from "./components/About"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {ProjectList, ProjectListItem} from "./components/Project"
import ParallaxSection from "./components/Parallax"

class App extends Component {
  render() {
    return (
      <>
        <header className="splash">
          <Header />
        </header>
        <div className="contentBody">
          <ProjectList>
            <ProjectListItem link="http://tossup.surge.sh" desc="Toss up is a website to help limit your recipe options." title="Toss Up" image="/images/Tossup.png" keys="Tossup" />
            <ProjectListItem link="https://funkeys-4853c.firebaseapp.com/" desc="An interactive keyboard with sounds and colors for entertainment." title="FunKeys" image="/images/FunKeys.png" keys="FunKeys" />
            <ProjectListItem link="https://github.com/lnchapin/capstone" desc="A mobile app to help ADHD individuals breakdown tasks and time block them to increase success in finishing tasks." title="Pomo" image="/images/Pomo.png" keys="Pomo" />
            <ProjectListItem link="http://dentallabquiz.surge.sh/" desc="A quiz built to dig into how React, Radio Buttons, and Forms work together." title="Dental Quiz" image="/images/dentalLabQuiz.png" keys="Dental" />
          </ProjectList>
          <ParallaxSection src="/images/code.jpg" />
          <About />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
