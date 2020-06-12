import React from 'react';
import './Navbar.css';
import Tab from './Tab/Tab'

function Navbar() {
  return (
    <header className="header">
      <nav className="Navbar">
        <ul>
          <Tab link="/" exact="true">Alexander Franklin</Tab>
          <Tab link="/resume">Resume</Tab>
          <Tab link="/projects">Projects</Tab>
          <Tab link="/contact">Contact</Tab>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
