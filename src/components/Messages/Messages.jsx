import React from 'react';
import styles from './Messages.module.css';
import Users from './Users/Users';
import Dialog from './Dialog/Dialog';

const Messages = (props) => {
  let user = props.users.map((item, index) => (
    <Users key={700 + index} id={item.id} userName={item.userName} />
  ));
  let dialog = props.dialogs.map((item, index) => <Dialog key={600 + index} text={item.text} />);

  let refReactTextarea = React.createRef();

  let addMessages = () => props.addMessages(refReactTextarea.current.value);
  let updateTextMessages = () => props.updateTextMessages(refReactTextarea.current.value);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_users}>
        <div className={styles.title}>
          <p>Users</p>
        </div>
        {user}
      </div>
      <div className={styles.wrapper_dialog}>
        <div className={styles.dialog}>
          <div>{dialog}</div>
          <div className={styles.dialogTextarea}>
            <textarea
              onChange={updateTextMessages}
              value={props.newValueMessages}
              ref={refReactTextarea}
              placeholder="alt+f4"></textarea>
            <button onClick={addMessages} className={styles.floatingButton}>
              sendMessages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
