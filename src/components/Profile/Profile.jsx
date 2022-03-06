import React from 'react';
import styles from './Profile.module.css';
import PostsConteiner from './posts/postsConteiner'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) =>{
    return( 
            <div className={styles.Profile}>
                <ProfileInfo updateStatusThunk={props.updateStatusThunk} status={props.status} profile={props.profile}/>
                <PostsConteiner/>
            </div>
            )
}

export default Profile;