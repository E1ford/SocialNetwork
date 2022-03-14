import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <NavLink activeClassName={styles.active} to="/profile">
        Profile
      </NavLink>
      <NavLink activeClassName={styles.active} to="/messages">
        messages
      </NavLink>
      <NavLink activeClassName={styles.active} to="/games">
        Games
      </NavLink>
      <NavLink activeClassName={styles.active} to="/music">
        Music
      </NavLink>
      <NavLink activeClassName={styles.active} to="/findUsers">
        Users
      </NavLink>
      <NavLink activeClassName={styles.active} to="/settings">
        Settings
      </NavLink>
    </div>
  );
};

export default Navbar;
