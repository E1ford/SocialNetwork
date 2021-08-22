
let initialState = {
        newValueMessages:'',
        userData:[
            {userName:'Ivan', id:'1'},
            {userName:'Dmitry', id:'2'},
            {userName:'Max', id:'3'},
            {userName:'Svetlana', id:'4'},
            {userName:'Yan', id:'5'}
        ],
        dialogData:[
            {text:"hello i'm Ivan", id:"1"},
            {text:"hello i'm Dmitry", id:"2"},
            {text:"hello i'm Svetlana", id:"3"},
            {text:"hello i'm Yan", id:"4"}
        ]
    
}
const mesReducer = (state = initialState, action)=>{
    
    switch(action.type){
        case "ADD-MESSAGES":
            if(!action.text == ''){
            state.dialogData.push({text:action.text, id:"15"});
            state.newValueMessages=""
            }return state;
        case "UPDATE-TEXT-MESSAGES":
            state.newValueMessages = action.value;
            return state;
        default:
            return state;
    }
}


export default mesReducer;

export  let addMessagesActionCreator = (text)=>({type:"ADD-MESSAGES", text: text});
export let updateTextMessagesActionCreator = (value)=>({type:"UPDATE-TEXT-MESSAGES", value: value});