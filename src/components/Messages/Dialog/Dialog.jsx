import React from 'react';
import styles from './Dialog.module.css';


const Dialog = (props) =>{
    return( 
            <div className={styles.wrapper}>
                <div>
                {props.text}
                </div>
            </div>
            )
}

export default Dialog;