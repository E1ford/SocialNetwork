import * as axios from 'axios';
import React from 'react';
import FindUser from './FindUser/FindUser';


const FindUsers = (props) =>{
    if(props.users.length === 0 ){
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then( response => {
        props.setUsersDispatch(response.data.items)
        })
    }
    let usera = props.users.map((item) => 
    <FindUser 
    followDispatch={props.followDispatch} 
    follow={item.follow} 
    urlImg={item.urlImg} 
    name={item.name} 
    country={item.country} 
    city={item.city} 
    id={item.id}/>
);

    return( 
            <>
                {usera}
            </>
    )
}

export default FindUsers;