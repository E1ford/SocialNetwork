import React from 'react';
import styles from './FindUser.module.css';
import userPhoto from '../../../assets/images/avatar2.png'

const FindUser = ({follow,urlImg,name,country,city,id,followDispatch}) =>{
    let unfollow = '  ';
    (follow)? unfollow = 'follow': unfollow = 'unfollow'
    let  clickFollow = () =>{ followDispatch(id)}
    return( 
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <img src={(urlImg === null)? urlImg: userPhoto } alt=''></img>
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