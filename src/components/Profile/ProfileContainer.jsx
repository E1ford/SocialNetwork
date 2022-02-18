import React from "react";
import Profile from "./Profile";
import { connect} from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer'
import {withRouter} from 'react-router-dom'
import usersAPI from './../../api/requests';

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
            <Profile {...this.props} profile={this.props.profile}></Profile>
        )
    }
}

let mapStateToProps =(state)=>{
    return{
        myId: state.auth.id,
        profile:state.profile.profile
    }
}
// контейнерный компонент который передаст в пропсы данные из URL 
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);