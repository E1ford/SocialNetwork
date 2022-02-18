
const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE='SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT='TOTAL_USERS_COUNT',
    TOGLE_LOADING_STATUS = 'TOGLE_LOADING_STATUS';

let initialState ={
    users:[],
    //размер страницы(сколько пользователей вывести )
    pageSize: 8,
    // сколько всего пользователей
    totalUserCount:0,
    //выделенная страница
    currentPages:1,
    //идет ли запрос на сервер ?
    isFetching : false
}
       

const findUsersReducer =( state = initialState, action)=>{
    switch(action.type){
        case FOLLOW:{
            let stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy.users.forEach((i) => {
                if(i.id === action.id){
                    i.followed = true;
                }
            })
            return stateCopy
        }
        case UNFOLLOW:{
            let stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy.users.forEach((i) => {
                if(i.id === action.id){
                    i.followed =  false 
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
        case TOGLE_LOADING_STATUS:{
            return{
                ...state, 
                isFetching : action.status
            }
        }
        default:
             return state;
    }
}


export default findUsersReducer;

export  let onFollow = (id)=>({type:FOLLOW, id});
export  let onUnfollow = (id)=>({type:UNFOLLOW, id});
export  let setUsers = (users)=>({type:SET_USERS, users});
export  let setCurrentPage = (num)=>({type:SET_CURRENT_PAGE, curentPage:num});
export  let setTotalUsersCount = (num)=>({type:SET_TOTAL_USERS_COUNT, totalUserCount:num});
export  let togleLoadingStatus = (status)=>({type:TOGLE_LOADING_STATUS, status});

