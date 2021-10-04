import * as axios from 'axios';
import React from 'react';
import FindUser from './FindUser/FindUser';
import styles from './FindUsers.module.css';



class FindUsers extends React.Component {
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pageSize}`)
            .then( response => {
                this.props.setUsersDispatch(response.data.items);
                this.props.setTotalUsersCountDispatch(response.data.totalCount);
            })
    };
    onChangePage = (pageNum) => {
        this.props.setCurrentPageDispatch(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then( response => {
                this.props.setUsersDispatch(response.data.items)
            })
    }
    render =()=>{

        let pagesCount = Math.ceil(this.props.totalUserCount/this.props.pageSize)
        let pages=[];
        for(let i=1; i<=pagesCount; i++){
            pages.push(i);
        }
        return( 
                <div className={styles.wrapper}>
                {pages.map((p) => {
                    return<div className={ styles.allPages
                        + ' '
                        + (this.props.currentPages === p && styles.activePages)
                    } 
                    onClick={(e)=>{this.onChangePage(p)}}>{p}</div>})
                }

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
                
                </div>
        )
    }
}

export default FindUsers;