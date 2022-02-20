import React from "react";
import Profile from "./Profile";
import { connect} from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer'
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
    }

    render(){
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps =(state)=>{
    return{
        myId: state.auth.id,
        profile:state.profile.profile
    }
}
export default compose(
    connect(mapStateToProps, {setUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);