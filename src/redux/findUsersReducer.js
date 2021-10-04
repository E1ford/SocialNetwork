
const FOLLOW = 'FOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE='SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT='TOTAL_USERS_COUNT';

let initialState ={
    users:[],
    //размер страницы
    pageSize: 3,
    // сколько всего пользователей
    totalUserCount:7,
    //выделенная страница
    currentPages:1
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
            stateCopy.users=[...action.users]
            return stateCopy;
        }
        case SET_CURRENT_PAGE:{
            return{
                ...state, 
                currentPages : action.curentPage
            }
        }
        case SET_TOTAL_USERS_COUNT:{
            return{
                ...state, 
                totalUserCount : action.totalUserCount
            }
        }
        default:
             return state;
    }
}


export default findUsersReducer;

export  let followActionCreator = (id)=>({type:FOLLOW, id:id});
export  let setUsersActionCreator = (users)=>({type:SET_USERS, users:users});
export  let setCurrentPageAC = (num)=>({type:SET_CURRENT_PAGE, curentPage:num});
export  let setTotalUsersCountAC = (num)=>({type:SET_TOTAL_USERS_COUNT, totalUserCount:num});

