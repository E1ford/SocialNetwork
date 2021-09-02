
import {addMessagesActionCreator, updateTextMessagesActionCreator} from '../../redux/mesReducer';
import Messages from './Messages';
import { connect } from 'react-redux';



let mapStateToProps =(state)=>{
    return{
        users:state.messages.userData,
        dialogs: state.messages.dialogData,
        newValueMessages:state.messages.newValueMessages
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        updateValue:(value)=>{dispatch(updateTextMessagesActionCreator(value))},
        sendMessagesClick:(value)=>{dispatch(addMessagesActionCreator(value))}
    }
}

const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages)

export default MessagesContainer;