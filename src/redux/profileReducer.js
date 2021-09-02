
let initialState = {
    posts:[
        {messages:"Hello world!", likes: '42'},
        {messages:"it's my social network", likes: '98'}
    ],
    newValue:'',
}

const profileReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD-POST":{
                let stateCopy={...state};
                stateCopy.posts =[...state.posts]
                stateCopy.posts.unshift({messages:action.text, likes:'0'})
                stateCopy.newValue = "";
            return stateCopy;
        }
        case "UPDATE-TEXT-POST":{
            let stateCopy={...state};
            
            stateCopy.newValue = action.value;
            return stateCopy;
        }

        default:
             return state;
    }
}


export default profileReducer;

export  let addPostActionCreator = (text)=>({type:"ADD-POST", text: text});
export let updateTextPostActionCreator = (value)=>({type:"UPDATE-TEXT-POST", value: value});