
import React from 'react';
import Spiner from '../common/spiner/Spiner';
import FindUser from './FindUser/FindUser';
import styles from './FindUsers.module.css';



const FindUsers = (props)=>{
    let pagesCount = Math.ceil(props.totalUserCount/props.pageSize)
    let pages=[];
    for(let i=1; i<=pagesCount; i++){
        pages.push(i);
    }
    return( 
    
        <div className={styles.wrapper}>
            {props.isFetching && <Spiner/>}
                
            <div className={styles.pagination}>
                {pages.map((p,index) => {
                    return<div key={index} className={ styles.allPages + ' ' + (props.currentPages === p && styles.activePages)} 
                                onClick={(e)=>{props.onChangePage(p)}}>{p}</div>})
                }
            </div>
            <div>
            {props.users.map((item) => 
                <FindUser 
                key={item.id}
                followD={item.follow} 
                follow={item.followed} 
                urlImg={item.urlImg} 
                name={item.name} 
                country={item.country} 
                city={item.city} 
                id={item.id}/>)
            }
            </div>
        </div>
    )
}

export default FindUsers;