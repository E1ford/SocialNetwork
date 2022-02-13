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