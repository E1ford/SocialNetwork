import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import mesReducer from './mesReducer';
import findUsersReducer from "./findUsersReducer";

let reducers = combineReducers({
    profile: profileReducer,
    messages: mesReducer,
    findUsers: findUsersReducer})
    
let store = createStore(reducers);


export default store;