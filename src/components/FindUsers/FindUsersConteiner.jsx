import React from 'react';
import * as actionCreator from '../../redux/findUsersReducer';
import { connect } from 'react-redux';
import FindUsers from './FindUsers';

class FindUsersContainerAPI extends React.Component {
    componentDidMount(){
        this.props.getUsersThunk(this.props.currentPages,this.props.pageSize);
    };
    onChangePage = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.getUsersThunk(pageNum,this.props.pageSize)
    } 
    render =()=>{
        return <FindUsers 
            onChangePage={this.onChangePage}
            {...this.props}
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