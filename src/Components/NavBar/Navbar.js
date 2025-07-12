import React, { useContext, useState } from 'react';
import styles from './Navbar.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';

const navItems = [
  { label: 'Me', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Skills', path: '/skills' }
];

export default function Navbar() {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
      {/* Hamburger button */}
      <button
        className={`${styles.menuToggle} ${menuOpen ? styles.open : ''} ${styles[theme]}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Nav links container */}
      <nav className={`${styles.navbar} ${styles[theme]} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.menu}>
          {navItems.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`${styles.link} ${isActive ? styles.selected : ''}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setMenuOpen(false)} // close menu on click
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
