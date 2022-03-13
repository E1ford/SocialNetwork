import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return (
    <div className={styles.Navbar}>
        <NavLink activeClassName={styles.active} to="/SocialNetwork/profile">Profile</NavLink>
        <NavLink activeClassName={styles.active} to="/SocialNetwork/messages">messages</NavLink>
        <NavLink activeClassName={styles.active} to="/SocialNetwork/games">Games</NavLink>
        <NavLink activeClassName={styles.active} to="/SocialNetwork/music">Music</NavLink>
        <NavLink activeClassName={styles.active} to="/SocialNetwork/findUsers">Users</NavLink>
        <NavLink activeClassName={styles.active} to="/SocialNetwork/settings">Settings</NavLink>
    </div>
    )
}

export default Navbar;