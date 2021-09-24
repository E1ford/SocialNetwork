import React from 'react';
import FindUser from './FindUser/FindUser';
import styles from './FindUsers.module.css';


const FindUsers = (props) =>{
    
    let usera = props.user.map((item) => 
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