import mesReducer from "./mesReducer"
import profileReducer from "./profileReducer"


let store = {
    _state : {
        messages:{
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
        mesReducer(store._state.messages, action);
        profileReducer(store._state.profile, action);
        store.render(store.getState())
    }
}

export default store;