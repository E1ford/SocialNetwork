import React from 'react';
import styles from './News.module.css';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';


const News = () =>{
    return( 
            <div className={styles.News}>
                
            </div>
            )
}
export default compose(withAuthRedirect)(News);