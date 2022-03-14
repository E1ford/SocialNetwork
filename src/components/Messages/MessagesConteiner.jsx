import * as actionCreators from '../../redux/mesReducer';
import Messages from './Messages';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    users: state.messages.userData,
    dialogs: state.messages.dialogData,
    newValueMessages: state.messages.newValueMessages,
  };
};
export default compose(connect(mapStateToProps, actionCreators), withAuthRedirect)(Messages);
