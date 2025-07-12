import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Containers/Home/Home';
import Navbar from './Components/NavBar/Navbar';
import { Projects } from './Containers/Projects/Projects';
import Skills from './Containers/Skills/Skills';
import Experience from './Containers/Experience/Experience';
import Footer from './Components/Footer/Footer';
import SwitchModeBtn from './Components/SwitchModeBtn/SwitchModeBtn';

import classes from './App.module.scss';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${classes.container} ${theme === 'light' ? classes.light : classes.dark}`}>
      <div className={classes.topbarContainer}>
        <Navbar />
      
        <SwitchModeBtn onClick={toggleTheme} />
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/experience">
          <Experience />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
