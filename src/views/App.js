import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'
import DarkModeButton from './DarkModeButton/DarkModeButton'
import Home from './Pages/Home/Home'
import Resume from './Pages/Resume/Resume'
import PantryAid from './Pages/PantryAid/PantryAid'
import Projects from './Pages/Projects/Projects'
import {Route} from 'react-router-dom'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  let appClass = "";
  if (darkMode) {
    appClass = "dark_mode";
  }
  return (
    <div className={"App " + appClass}>
      <div className="background_tint" />
      <Navbar />
      <DarkModeButton 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
      />
      <div className="content">
        <Route path="/" exact component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/pantryaid" component={PantryAid} />
        <Route path="/projects" component={Projects} />
      </div>
    </div>
  );
}

export default App;
