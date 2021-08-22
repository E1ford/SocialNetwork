import React from 'react';
import styles from './Profile.module.css';
import PostsConteiner from './posts/postsConteiner'

const Profile = (props) =>{
    return( 
            <div className={styles.Profile}>
                <img src="https://www.softrew.ru/wp-content/cache/thumb/75/fb4c03e3eee2d75_810x260.png" alt=""></img>
                <div className={styles.aboutMe}>
                    <div className={styles.aboutPhoto}>
                        <img src="https://anime-fans.ru/wp-content/uploads/2021/02/Smeshnye-anime-avy-v-luchshem-kachestve-26.jpeg" alt=""></img>
                    </div>
                    <div className={styles.aboutText}>
                        <div className={styles.title}>
                            <span>DMYTRY P.</span>
                        </div>
                        <div className={styles.text}>
                            <li>Date of Birth: 29 january</li>
                            <li>City: Rostov-on-don</li>
                            <li>Education: BSU'11</li>
                            <li>Web Site:https//tutMoiSite</li>
                        </div>
                    </div>
                </div>
                <PostsConteiner
                posts={props.posts} 
                newValue={props.newValue}
                dispatch={props.dispatch}
                />
            </div>
            )
}

export default Profile;