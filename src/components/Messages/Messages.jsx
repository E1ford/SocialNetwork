import React from 'react';
import styles from './Messages.module.css';
import Users from './Users/Users'
import Dialog from './Dialog/Dialog'




const Messages = (props) =>{

    let user = props.users.map((item)=> <Users id={item.id}  userName={item.userName}/>)
    let dialog = props.dialogs.map((item)=> <Dialog text={item.text}/>)

    return( 
            <div className={styles.wrapper}>
                <div className={styles.wrapper_users}>
                    <div className={styles.title}>
                        <p>Users</p>
                    </div>
                {user}
                </div>
                <div className={styles.wrapper_dialog}>
                    <div className={styles.dialog}>
                        {dialog}
                    </div>
                </div>
                
            </div>
            )
}

export default Messages;