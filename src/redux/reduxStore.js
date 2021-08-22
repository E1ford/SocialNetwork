import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import mesReducer from './mesReducer';

let reducers = combineReducers({
    profile: profileReducer,
    messages: mesReducer})
    
let store = createStore(reducers);


export default store;