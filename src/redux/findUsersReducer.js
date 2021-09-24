const FOLLOW = 'FOLLOW'
let initialState = {
    allUsers:[
        {follow:true, urlImg:"https://it-tehnik.ru/wp-content/uploads/kak-posmotret-avatarku-v-diskorde-v-polnom-razmere_1.jpg", 
        name:'Ivan', country: 'Belarus', city: 'Minsk', id:10},
        {follow:false, urlImg:"https://static10.tgstat.ru/channels/_0/de/deeb9f0e7b43dc6d67f4628356c274d7.jpg", 
        name:'Mary', country: 'Russia', city: 'Moscow', id:11},
        {follow:true, urlImg:"https://ona-znaet.ru/_pu/19/36979793.jpg", 
        name:'lexa', country: 'Ukrane', city: 'Kiev', id:12},
        {follow:false, urlImg:"https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg", 
        name:'Andry', country: 'Russia', city: 'Rostov-On-Don', id:13},
        {follow:true, urlImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9BlXN-iTDCPhfAA88s66zZ6VJ-wNKTqQEtxoe12tD_VE6--eua9oOu4N2Rd-I2XRr8o&usqp=CAU", 
        name:'Maxim', country: 'Belarus', city: 'Minsk', id:14}
    ]
}

const findUsersReducer = (state = initialState, action)=>{
    debugger
    switch(action.type){
        case FOLLOW:{
            let stateCopy = JSON.parse(JSON.stringify(state))
            stateCopy.allUsers.forEach((i) => {
                if(i.id === action.id){
                    (i.follow) ? i.follow = false : i.follow = true;
                }
            })
            return stateCopy
        }
        default:
             return state;
    }
}


export default findUsersReducer;

export  let followActionCreator = (id)=>({type:'FOLLOW', id:id});