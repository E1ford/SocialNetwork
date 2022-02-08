
import * as actionCreators from '../../redux/mesReducer';
import Messages from './Messages';
import { connect } from 'react-redux';



let mapStateToProps =(state)=>{
    return{
        users:state.messages.userData,
        dialogs: state.messages.dialogData,
        newValueMessages:state.messages.newValueMessages
    }
}

const MessagesContainer = connect(mapStateToProps,actionCreators)(Messages)

export default MessagesContainer;