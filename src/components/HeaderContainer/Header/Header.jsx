import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = ({isAuth, login}) =>{
    return (
        <div className={styles.Header}>
            <div className={styles.container}>
                <img className={styles.icon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1724px-Apple_logo_black.svg.png" alt=""></img>
                <div className={styles.login}>
                    <NavLink to={'/login'}>
                        {!isAuth? 'log in': login}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;