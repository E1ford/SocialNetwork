import React from 'react';
import * as actionCreator from '../../redux/findUsersReducer';
import { connect } from 'react-redux';
import axios from 'axios';
import FindUsers from './FindUsers';

class FindUsersContainerAPI extends React.Component {
    componentDidMount(){
        this.props.togleLoadingStatus(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pageSize}`)
            .then( response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.togleLoadingStatus(false);
            })
    };
    onChangePage = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.togleLoadingStatus(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then( response => {
                this.props.setUsers(response.data.items);
                this.props.togleLoadingStatus(false);
            })
    }
    render =()=>{
        return <FindUsers onChangePage={this.onChangePage} 
        currentPages={this.props.currentPages}
        totalUserCount={this.props.totalUserCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        isFetching={this.props.isFetching}
            />
    }
}

let mapStateToProps =(state)=>{
    return{
        users: state.findUsers.users,
        pageSize: state.findUsers.pageSize,
        totalUserCount: state.findUsers.totalUserCount,
        currentPages: state.findUsers.currentPages,
        isFetching: state.findUsers.isFetching
    }
}

const FindUsersContainer = connect(mapStateToProps, actionCreator)(FindUsersContainerAPI)

export default FindUsersContainer;