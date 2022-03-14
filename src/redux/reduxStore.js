import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import profileReducer from './profileReducer';
import mesReducer from './mesReducer';
import findUsersReducer from './findUsersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  profile: profileReducer,
  messages: mesReducer,
  auth: authReducer,
  findUsers: findUsersReducer,
});

// для всех других браузеров
// const store = createStore(reducers,applyMiddleware(thunkMiddleware));

// для хрома dev tool
const store = createStore(
  reducers,
  compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()),
);
window.store = store;

export default store;
