import React from 'react';
import {followActionCreator, setUsersActionCreator, setCurrentPageAC,setTotalUsersCountAC} from '../../redux/findUsersReducer';
import { connect } from 'react-redux';
import axios from 'axios';
import FindUsers from './FindUsers';

class FindUsersContainerAPI extends React.Component {
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pageSize}`)
            .then( response => {
                this.props.setUsersDispatch(response.data.items);
                this.props.setTotalUsersCountDispatch(response.data.totalCount);
            })
    };
    onChangePage = (pageNum) => {
        this.props.setCurrentPageDispatch(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then( response => {
                this.props.setUsersDispatch(response.data.items)
            })
    }
    render =()=>{
        return <FindUsers onChangePage={this.onChangePage} 
        totalUserCount={this.props.totalUserCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
            />
    }
}

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
const FindUsersContainer = connect(mapStateToProps,mapDispatchToProps)(FindUsersContainerAPI)

export default FindUsersContainer;