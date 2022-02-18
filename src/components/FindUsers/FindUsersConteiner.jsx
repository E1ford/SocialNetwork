import React from 'react';
import * as actionCreator from '../../redux/findUsersReducer';
import { connect } from 'react-redux';
import FindUsers from './FindUsers';
import usersAPI from './../../api/requests';

class FindUsersContainerAPI extends React.Component {
    componentDidMount(){
        this.props.togleLoadingStatus(true);
        usersAPI.requestGetUsersPage(this.props.currentPages,this.props.pageSize)
        .then( response => {
            debugger
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount);
                this.props.togleLoadingStatus(false);
            })
            
    };
    onChangePage = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.togleLoadingStatus(true);
        usersAPI.requestGetUsersPage(pageNum,this.props.pageSize)
        .then( response => {
                this.props.setUsers(response.items);
                this.props.togleLoadingStatus(false);
            })
    } 
    render =()=>{
        return <FindUsers 
            onChangePage={this.onChangePage} 
            currentPages={this.props.currentPages}
            totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            isFetching={this.props.isFetching}
            onFollow={this.props.onFollow}
            onUnfollow={this.props.onUnfollow}
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