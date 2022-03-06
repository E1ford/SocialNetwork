import React from "react";
import Profile from "./Profile";
import { connect} from 'react-redux';
import {setUserProfile,getStatusThunk,updateStatusThunk} from '../../redux/profileReducer'
import {withRouter} from 'react-router-dom'
import {usersAPI} from '../../api/api';
import { compose } from "redux";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match.params.userId
        if (!userId){userId =this.props.myId} 
        usersAPI.getProfile(userId)
            .then( response => {
                this.props.setUserProfile(response.data);
            })
            this.props.getStatusThunk(userId)
    }

    render(){
        return (
            <Profile {...this.props} status={this.props.status} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps =(state)=>{
    return{
        myId: state.auth.id,
        profile:state.profile.profile,
        status: state.profile.status
    }
}
export default compose(
    connect(mapStateToProps, {setUserProfile,getStatusThunk,updateStatusThunk}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);