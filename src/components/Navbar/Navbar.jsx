import React from 'react';
import styles from './Navbar.module.css';


const Navbar = () =>{
    return <div className={styles.Navbar}>
        <li>Profile</li>
        <li>Messages</li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
    </div>
    
}

export default Navbar;