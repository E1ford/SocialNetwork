import React from 'react';
import styles from './FindUser.module.css';
import defaultAvatar from '../../../assets/images/avatar2.png'
import { NavLink } from 'react-router-dom';
import usersAPI from '../../../api/requests';




const FindUser = ({onUnfollow,followed,photos,name,country,city,id,onFollow}) =>{
    
    let unfollow = ' ';
    (!followed)? unfollow = 'follow': unfollow = 'unfollow'


    let  clickFollow = (userId) =>{ 
        switch (unfollow) {
            case 'unfollow':
                usersAPI.requestDeleteFollowUser(userId)
                    .then( response => {
                        if(response.data.resultCode === 0){
                            onUnfollow(userId)
                        } 
                    })
                break;
            case 'follow':
                usersAPI.requestPostFollowUser(userId)
                    .then( response => {
                        if(response.data.resultCode === 0){
                            onFollow(userId)
                        } 
                    })
                break;
            default:
                break;
        }
        
    }


    return( 
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <div>
                    <NavLink to={`/profile/${id}`}>
                        <img src={
                            (photos.large === null )? defaultAvatar : photos.large
                        } alt=''></img>
                    </NavLink>
                </div>
                <div onClick={()=>{clickFollow(id)}} className={styles.follow}>{unfollow}</div>
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