
import {followActionCreator, setUsersActionCreator} from '../../redux/findUsersReducer';
import FindUsers from './FindUsers';
import { connect } from 'react-redux';



let mapStateToProps =(state)=>{
    return{
        users: state.findUsers.users
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        followDispatch:(id)=>{dispatch(followActionCreator(id))},
        setUsersDispatch:(users)=>{dispatch(setUsersActionCreator(users))}
    }
}
const FindUsersContainer = connect(mapStateToProps,mapDispatchToProps)(FindUsers)

export default FindUsersContainer;