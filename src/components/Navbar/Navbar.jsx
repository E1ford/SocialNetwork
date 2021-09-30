import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return (
    <div className={styles.Navbar}>
        <NavLink activeClassName={styles.active} to="/profile">Profile</NavLink>
        <NavLink activeClassName={styles.active} to="/messages">messages</NavLink>
        <NavLink activeClassName={styles.active} to="/News">News</NavLink>
        <NavLink activeClassName={styles.active} to="/Music">Music</NavLink>
        <NavLink activeClassName={styles.active} to="/FindUsers">Users</NavLink>
        <NavLink activeClassName={styles.active} to="/Settings">Settings</NavLink>
    </div>
    )
}

export default Navbar;