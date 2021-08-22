
let initialState = {
    posts:[
        {messages:"Hello world!", likes: '42'},
        {messages:"it's my social network", likes: '98'}
    ],
    newValue:'',
}

const profileReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD-POST":
            if(!action.text == ''){
                state.posts.unshift({messages:action.text, likes:'581'})
        
                state.newValue = "";
                
            }return state;
        
        case "UPDATE-TEXT-POST":
            state.newValue = action.value;
            return state;
        default:
             return state;
    }
}


export default profileReducer;

export  let addPostActionCreator = (text)=>({type:"ADD-POST", text: text});
export let updateTextPostActionCreator = (value)=>({type:"UPDATE-TEXT-POST", value: value});