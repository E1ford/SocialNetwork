import React from 'react';
import styles from './post.module.css';





const Post = (props) => {
return(
    <div className={styles.post}>
        <div className={styles.photo}>
            <img src="https://anime-fans.ru/wp-content/uploads/2021/02/Smeshnye-anime-avy-v-luchshem-kachestve-26.jpeg" alt="" />
        </div>
        <div className={styles.text}>
            <p>{props.messages}</p>
        </div>
        <div className={styles.likes}>{props.likes}</div>
    </div>
    )
};
export default Post;