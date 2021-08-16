import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';


const Users = (props) =>{
    return( 
                <NavLink className={styles.a} to={"/messages/" + props.id}>{props.userName}</NavLink>
            )
}

export default Users;