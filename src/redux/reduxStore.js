import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import mesReducer from './mesReducer';
import findUsersReducer from "./findUsersReducer";
import authReducer from './authReducer';
let reducers = combineReducers({
    profile: profileReducer,
    messages: mesReducer,
    auth:authReducer,
    findUsers: findUsersReducer})
    
let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;
export default store;