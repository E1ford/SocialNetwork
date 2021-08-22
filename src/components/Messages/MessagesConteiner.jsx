import React from 'react';
import {addMessagesActionCreator, updateTextMessagesActionCreator} from '../../redux/mesReducer';
import Messages from './Messages';



const MessagesContainer = (props) =>{

    let sendMessagesClick=(value)=>{props.store.dispatch(addMessagesActionCreator(value))}

    let updateValue=(value)=> {props.store.dispatch(updateTextMessagesActionCreator(value))}

    return <Messages 
        newValueMessages={props.store._state.messages.newValueMessages}
        updateValue={updateValue}
        sendMessagesClick={sendMessagesClick}
        users={props.store.getState().messages.userData}
        dialogs={props.store.getState().messages.dialogData}
        />;
}

export default MessagesContainer;