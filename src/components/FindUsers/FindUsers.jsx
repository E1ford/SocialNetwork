import * as axios from 'axios';
import React from 'react';
import FindUser from './FindUser/FindUser';


class FindUsers extends React.Component {
    componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=3")
            .then( response => {
                this.props.setUsersDispatch(response.data.items)
                })
    }
    render =()=>{
        let pagesCount= this.props.totalUserCount/this.props.pageSize
        
        return( 
                <>
                {this.props.users.map((item) => 
                <FindUser 
                followDispatch={item.followDispatch} 
                follow={item.followed} 
                urlImg={item.urlImg} 
                name={item.name} 
                country={item.country} 
                city={item.city} 
                id={item.id}/>
                )}
                </>
        )
    }
}

export default FindUsers;