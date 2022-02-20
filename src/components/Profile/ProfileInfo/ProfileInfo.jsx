import React from 'react';
import styles from './ProfileInfo.module.css';
import Spiner from '../../common/spiner/Spiner';
import defaultAvatar from '../../../assets/images/avatar2.png';


const ProfileInfo = ({profile}) =>{
    // защита от ошибки пропров
    if(!profile) return <Spiner/>
    return( <>
                <img src="https://www.softrew.ru/wp-content/cache/thumb/75/fb4c03e3eee2d75_810x260.png" alt=""></img>
                <div className={styles.aboutMe}>
                    <div className={styles.aboutPhoto}>
                        <img src={(profile.photos.large === null||profile.photos.large===undefined)? defaultAvatar: profile.photos.large } alt=''></img>

                    </div>
                    <div className={styles.aboutText}>
                        <div className={styles.title}>
                            <span>{profile.fullName}</span>
                        </div>
                        <div className={styles.text}>
                            <li key ={1002097}>Контакты:</li>
                            <li key ={1002102}>instagram:  {!profile.contacts.instagram ? 'нет': profile.contacts.instagram}</li>
                            <li key ={1002101}>vk:  {!profile.contacts.vk? 'нет': profile.contacts.vk}</li>
                            <li key ={1002100}>github:{!profile.contacts.github? 'нет':profile.contacts.github }</li>
                           
                        </div>
                        
                    </div>
                    <div className={styles.aboutText}>
                        <div className={styles.title}>
                            <span>{profile.lookingForAJob? 'В активном поиске работы' : 'РАБОТУ НЕ ИЩУ'}</span>
                        </div>
                        <div className={styles.text}>
                            <li key ={1002093}>{profile.lookingForAJobDescription}</li>
                            <li key ={1002094}>мой ID {profile.userId}</li>
                            <li key ={1002099}>мой сайт: {!profile.contacts.website? 'нет': profile.contacts.website}</li>
                        </div>
                        
                    </div>
                </div>
            </>
            )
}


export default ProfileInfo;