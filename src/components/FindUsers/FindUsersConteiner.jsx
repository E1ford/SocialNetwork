
import {followActionCreator, setUsersActionCreator, setCurrentPageAC,setTotalUsersCountAC} from '../../redux/findUsersReducer';
import FindUsers from './FindUsers';
import { connect } from 'react-redux';



let mapStateToProps =(state)=>{
    return{
        users: state.findUsers.users,
        pageSize: state.findUsers.pageSize,
        totalUserCount: state.findUsers.totalUserCount,
        currentPages: state.findUsers.currentPages
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        followDispatch:(id)=>{dispatch(followActionCreator(id))},
        setUsersDispatch:(users)=>{dispatch(setUsersActionCreator(users))},
        setCurrentPageDispatch:(num)=>{dispatch(setCurrentPageAC(num))},
        setTotalUsersCountDispatch:(num)=>{dispatch(setTotalUsersCountAC(num))}
    }
}
const FindUsersContainer = connect(mapStateToProps,mapDispatchToProps)(FindUsers)

export default FindUsersContainer;