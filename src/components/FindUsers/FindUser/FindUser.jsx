import React from 'react';
import styles from './FindUser.module.css';
import userPhoto from '../../../assets/images/avatar2.png'
import { NavLink } from 'react-router-dom';

const FindUser = ({follow,urlImg,name,country,city,id,followD}) =>{
    let unfollow = '  ';
    (follow)? unfollow = 'follow': unfollow = 'unfollow'
    let  clickFollow = () =>{ followD(id)}
    return( 
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <div>
                    <NavLink to={`/profile/${id}`}>
                        <img src={(urlImg === null)? urlImg: userPhoto } alt=''></img>
                    </NavLink>
                </div>
                <div onClick={clickFollow} className={styles.follow}>{unfollow}</div>
            </div>
            <div className={styles.about}>
                <div className = {styles.left}>
                    <div>{name}</div>
                    <div>id({id})</div>
                </div>
                <div className = {styles.right}>
                    <div>{country}</div>
                    <div>{city}</div>
                </div>
            </div>
        </div>
    )
}

export default FindUser;