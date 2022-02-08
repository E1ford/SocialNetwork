
let initialState = {
    posts:[
        {messages:"Hello world!", likes: '42'},
        {messages:"it's my social network", likes: '98'}
    ],
    newValue:'',
    profile:null
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
        default:
             return state;
    }
}


export default profileReducer;

export  let setUserProfile = (profile)=>({type:"SET-USER-PROFILE", profile});
export  let addPost = (text)=>({type:"ADD-POST", text: text});
export let updateTextPost = (value)=>({type:"UPDATE-TEXT-POST", value});