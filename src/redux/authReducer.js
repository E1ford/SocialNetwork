import { authAPI } from "../api/api";

const TOGLE_LOADING_STATUS = "TOGLE_LOADING_STATUS";
const TOGLE_AUTH_STATUS = "TOGLE_AUTH_STATUS";
const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
    id:null, 
    email: null, 
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action)=>{
    switch(action.type){
        case "SET_USER_DATA":{
            console.log(action.userData)
            return{
                ...state,
                ...action.userData
            }
        }
        case "TOGLE_LOADING_STATUS":{
            return{
                ...state,
                isFetching:action.status
            }
        }
        case "TOGLE_AUTH_STATUS":{
            return{
                ...state,
                isAuth:action.status
            }
        }
        default:
             return state;
    }
}


export default authReducer;

export  let setUserData = (userData)=>({type:SET_USER_DATA, userData});
export  let togleLoadingStatus = (status)=>({type:TOGLE_LOADING_STATUS, status});
export  let togleAuthStatus = (status)=>({type:TOGLE_AUTH_STATUS, status});

export  let requestVerifyAuthThunk = ()=>{
    return (dispatch)=>{
        dispatch(togleLoadingStatus(true));
        authAPI.requestVerifyAuth()
        .then( response => {
            if(response.data.resultCode === 0 ){
                dispatch(setUserData(response.data.data));
                dispatch(togleAuthStatus(true));
            }else{
                dispatch(togleAuthStatus(false));
            }
            dispatch(togleLoadingStatus(false));
        })
    }
};
export  let loginThunk = (email,password)=>{
    return (dispatch)=>{
        authAPI.authLogin(email,password)
        .then( response => {
            if(response.data.resultCode===0){
                dispatch(requestVerifyAuthThunk(response.data.userId))
            }
            
        })
    }
};
export  let logoutThunk = ()=>{
    return (dispatch)=>{
        authAPI.logout()
        .then( response => {
            if(response.data.resultCode===0){
                dispatch(setUserData({
                    id:null, 
                    email: null, 
                    login: null,
                    isAuth: false
                }))
            }
            
        })
    }
};