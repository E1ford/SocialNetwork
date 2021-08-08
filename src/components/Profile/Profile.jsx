import React from 'react';
import styles from './Profile.module.css';


const Profile = () =>{
    return  <div className={styles.Profile}>
                <img src="https://www.softrew.ru/wp-content/cache/thumb/75/fb4c03e3eee2d75_810x260.png" alt=""></img>
                <div className={styles.aboutMe}>
                    <div className={styles.aboutPhoto}>
                        <img src="https://cdn25.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg" alt=""></img>
                    </div>
                    <div className={styles.aboutText}>
                        <div className={styles.title}>
                            <span>DMYTRY P.</span>
                        </div>
                        <div className={styles.text}>
                            <li>Date of Birth: 29 january</li>
                            <li>City: Rostov-on-don</li>
                            <li>Education: BSU`11</li>
                            <li>Web Site:https//tutMoiSite</li>
                        </div>
                    </div>
                </div>
                <div className={styles.posts}>
                    <div className={styles.title}>
                        <span>My posts</span>
                    </div>
                    <form act='#' method='post'>
                        <textarea type="text" name="post">ура я это сделал</textarea>
                        <button type="submit">запостить</button>
                    </form>
                    <div className={styles.myPosts}>
                            ok
                    </div>
                    
                </div>
            </div>
    
}

export default Profile;