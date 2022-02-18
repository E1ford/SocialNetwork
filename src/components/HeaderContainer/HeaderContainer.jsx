import React from 'react';
import Header from './Header/Header'
import * as actionCreator from '../../redux/authReducer'
import { connect} from 'react-redux';
import usersAPI from './../../api/requests';



class  HeaderContainerAPI extends React.Component{
    componentDidMount(){
        this.props.togleLoadingStatus(true);
        usersAPI.requestVerifyAuth()
            .then( response => {
                if(response.data.resultCode ===0 ){
                    this.props.setUserData(response.data.data);
                    this.props.togleAuthStatus(true);
                }else{
                    this.props.togleAuthStatus(false);
                }
                this.props.togleLoadingStatus(false);
            })
    }
    render(){
        return (
            <Header 
                isAuth={this.props.isAuth}
                login={this.props.login}/>
        )
    }
    
}


let mapStateToProps =(state)=>{
    return{
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}

const HeaderContainer = connect(mapStateToProps, actionCreator)(HeaderContainerAPI)

export default HeaderContainer;