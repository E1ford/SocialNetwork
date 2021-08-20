
let store = {
    _state : {
        mes:{
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
        },
        profile:{
            posts:[
                {messages:"Hello world!", likes: '42'},
                {messages:"it's my social network", likes: '98'}
            ],
            newValue:'',
        },

    render:''

    },
    getState(){
        return this._state
    },
    subscribe (observer){
        this.render = observer;
    },
    dispatch(action){
        if(action.type == "ADD-POST"){
            if(!action.text == ''){
                store._state.profile.posts.unshift({messages:action.text, likes:'581'})
            
                store._state.profile.newValue = "";
                store.render(store.getState())
            }
            
        }else if(action.type === "UPDATE-TEXT-POST"){
            store._state.profile.newValue = action.value;
            store.render(store.getState())

        }else if(action.type === "ADD-MESSAGES"){
            if(!action.text == ''){
                store._state.mes.dialogData.push({text:action.text, id:"15"});
                store._state.mes.newValueMessages=""
                store.render(store.getState())
            }
            
        }else if(action.type === "UPDATE-TEXT-MESSAGES"){
            debugger;
            store._state.mes.newValueMessages = action.value;
            store.render(store.getState())
        }
    }
}


export  let addPostActionCreator = (text)=>({type:"ADD-POST", text: text});
export let updateTextPostActionCreator = (value)=>({type:"UPDATE-TEXT-POST", value: value});

export  let addMessagesActionCreator = (text)=>({type:"ADD-MESSAGES", text: text});
export let updateTextMessagesActionCreator = (value)=>({type:"UPDATE-TEXT-MESSAGES", value: value});

export default store;