import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = ({isAuth, login,logoutThunk}) =>{
    return (
        <div className={styles.Header}>
            <div className={styles.container}>
                <NavLink to={'/'}>
                    <img className={styles.icon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1724px-Apple_logo_black.svg.png" alt=""></img>
                </NavLink>
                <div className={styles.login_logout}>
                    <div className={styles.login}>
                        <NavLink to={'/login'}>
                            {!isAuth? 'log in': login}
                        </NavLink>
                    </div>
                    {!isAuth? <div className={styles.buttonWelcome}>войти</div>: <div onClick={logoutThunk} className={styles.buttonWelcome}>выйти</div>}
                    {/* <div className={styles.buttonWelcome}>{!isAuth? 'войти': "выйти"}</div> */}
                </div>
            </div>
        </div>
    )
}

export default Header;