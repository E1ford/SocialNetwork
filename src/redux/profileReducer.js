
import { profileAPI } from './../api/api';

let initialState = {
    posts:[
        {messages:"Hello world!", likes: '42'},
        {messages:"it's my social network", likes: '98'}
    ],
    newValue:'',
    profile:null,
    status:null
}

const profileReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD-POST":{
            return{
                ...state,
                posts:[{messages:action.text, likes:'0'},...state.posts],
                newValue:""
            }
        }
        case "UPDATE-TEXT-POST":{
            return{
                ...state ,
                newValue: action.value
            }
        }
        case "SET-USER-PROFILE":{
            return{
                ...state, profile: action.profile
            }
        }
        case "SET-STATUS":{
            return{
                ...state, status: action.status
            }
        }
        default:
             return state;
    }
}


export default profileReducer;

export  let setUserProfile = (profile)=>({type:"SET-USER-PROFILE", profile});
export  let addPost = (text)=>({type:"ADD-POST", text: text});
export let updateTextPost = (value)=>({type:"UPDATE-TEXT-POST", value});
export let setStatus = (status)=>({type:"SET-STATUS", status});

export  let getStatusThunk = (userId)=>{
    return (dispatch)=>{
        profileAPI.getStatus(userId).then( response => {
            if(!response.data){
                dispatch(setStatus('тут будет ваш статус'));
            }else{
                dispatch(setStatus(response.data));
            }
            
        })
    }
};
export  let updateStatusThunk = (status)=>{
    return (dispatch)=>{
        profileAPI.updateStatus(status).then( response => {
            if(response.data.resultCode === 0){
                console.log('aaaaaaaa');
                dispatch(setStatus(status))
            }
            
        })
    }
};