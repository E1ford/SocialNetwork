import React from 'react';
import styles from './Login.module.css';
import { connect } from 'react-redux';
import { loginThunk } from '../../redux/authReducer';
import { logoutThunk } from './../../redux/authReducer';
import { Redirect } from 'react-router-dom';

let Login = ({ loginThunk, isAuth }) => {
  let [login, setLogin] = React.useState('free@samuraijs.com');
  let [password, setPassword] = React.useState('free');

  let onSendAuthRequest = () => {
    loginThunk(login, password);
  };
  let onChangeValue = (e) => {
    if (e.target.name === 'login') {
      setLogin(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };
  if (isAuth) {
    return <Redirect to="/games"></Redirect>;
  }
  return (
    <div className={styles.loginWrapper}>
      <h1>LOGIN</h1>
      <form>
        <div>
          <input value={login} onChange={onChangeValue} name="login" placeholder="Login" />
        </div>
        <div>
          <input
            value={password}
            onChange={onChangeValue}
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className={styles.welcome}>
          <div onClick={onSendAuthRequest}>welcome</div>
        </div>
      </form>
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { loginThunk, logoutThunk })(Login);
