import {applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import mesReducer from './mesReducer';
import findUsersReducer from "./findUsersReducer";
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk'



let reducers = combineReducers({
    profile: profileReducer,
    messages: mesReducer,
    auth:authReducer,
    findUsers: findUsersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(reducers,composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

window.store = store; 

export default store;
