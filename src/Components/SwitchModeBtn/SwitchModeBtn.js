import React, { useContext } from 'react';
import classes from './SwitchModeBtn.module.scss';
import { ThemeContext } from '../../Context/ThemeContext';

const SwitchModeBtn = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonText = theme === 'dark' ? 'Light' : 'Dark';

  return (
    <div
      className={`${classes.container} ${theme === 'light' ? classes.lightModeBorder : ''}`}
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      aria-label="Toggle theme"
    >
      <span
        className={`${classes.buttonText} ${buttonText === 'Dark' ? classes.darkText : ''}`}
        style={{
          
          fontWeight: 'bold',
          color: theme === 'dark' ? '#f39c12' : '#4a90e2',
          transition: 'color 0.3s ease',
        }}
      >
        {buttonText}
      </span>
    </div>
  );
};

export default SwitchModeBtn;
