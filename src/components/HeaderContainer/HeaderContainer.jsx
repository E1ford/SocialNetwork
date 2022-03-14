import React from 'react';
import Header from './Header/Header';
import * as actionCreator from '../../redux/authReducer';
import { connect } from 'react-redux';

class HeaderContainerAPI extends React.Component {
  componentDidMount() {
    // проверка верификации
    this.props.requestVerifyAuthThunk();
  }
  render() {
    return (
      <Header
        logoutThunk={this.props.logoutThunk}
        isAuth={this.props.isAuth}
        login={this.props.login}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
  };
};

const HeaderContainer = connect(mapStateToProps, actionCreator)(HeaderContainerAPI);

export default HeaderContainer;
