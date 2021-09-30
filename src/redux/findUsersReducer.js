
const FOLLOW = 'FOLLOW',
    SET_USERS = 'SET_USERS';

let initialState ={
    users:[],
    pageSize: 5,
    totalUserCount:1
}
       

const findUsersReducer =( state = initialState, action)=>{
    switch(action.type){
        case FOLLOW:{
            let stateCopy = JSON.parse(JSON.stringify(state))
            stateCopy.forEach((i) => {
                if(i.id === action.id){
                    (i.followed) ? i.followed = false : i.followed = true;
                }
            })
            return stateCopy
        }
        case SET_USERS:{
            let stateCopy = JSON.parse(JSON.stringify(state))
            stateCopy.users=[...state.users, ...action.users]
            return stateCopy;
        }
        default:
             return state;
    }
}


export default findUsersReducer;

export  let followActionCreator = (id)=>({type:'FOLLOW', id:id});
export  let setUsersActionCreator = (users)=>({type:'SET_USERS', users:users});
