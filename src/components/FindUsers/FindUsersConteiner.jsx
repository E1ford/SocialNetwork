
import {followActionCreator} from '../../redux/findUsersReducer';
import FindUsers from './FindUsers';
import { connect } from 'react-redux';



let mapStateToProps =(state)=>{
    return{
        user: state.findUsers.allUsers
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        followDispatch:(id)=>{dispatch(followActionCreator(id))} 
    }
}
debugger
const FindUsersContainer = connect(mapStateToProps,mapDispatchToProps)(FindUsers)

export default FindUsersContainer;