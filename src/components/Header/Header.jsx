import React from 'react';
import styles from './Header.module.css';


const Header = () =>{
    return (
        <div className={styles.Header}>
            <div className={styles.container}>
                <img className={styles.icon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1724px-Apple_logo_black.svg.png" alt=""></img>
            </div>
        </div>
    )
}

export default Header;