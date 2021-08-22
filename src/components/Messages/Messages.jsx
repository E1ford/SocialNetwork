import React from 'react';
import styles from './Messages.module.css';
import Users from './Users/Users'
import Dialog from './Dialog/Dialog'



const Messages = (props) =>{

    let user = props.users.map((item)=> <Users id={item.id}  userName={item.userName}/>)
    let dialog = props.dialogs.map((item)=> <Dialog text={item.text}/>)

    let refReactTextarea = React.createRef();
    
    let sendMessagesClick = () => props.sendMessagesClick(refReactTextarea.current.value);
    let updateValue = () => props.updateValue(refReactTextarea.current.value);

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
                        <div>
                            {dialog}
                        </div>
                        <div className={styles.dialogTextarea}>
                            <textarea 
                                onChange={updateValue} 
                                value={props.newValueMessages} 
                                ref={refReactTextarea} placeholder="alt+f4" 
                            ></textarea>
                            <button onClick={sendMessagesClick} className={styles.floatingButton}>sendMessages</button>
                        </div>
                    </div>
                </div>
                
            </div>
            )
}

export default Messages;