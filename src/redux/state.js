
let store = {
    _state : {
        mes:{
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
        if(action.type === "ADD-POST"){
            if(!action.text == ''){
                store._state.profile.posts.unshift({messages:action.text, likes:'581'})
            
            store._state.profile.newValue=""
            store.render(store.getState())
            }
            
        }else if(action.type === "UPDATE-TEXT-POST"){
            store._state.profile.newValue = action.value;
            store.render(store.getState())
        }
    },
    
}


export  let addPostActionCreator = (text)=>({type:"ADD-POST", text: text});
export let updateTextPostActionCreator = (value)=>({type:"UPDATE-TEXT-POST", value: value});
export default store;