
import React from 'react';
import {useState} from 'react'
import Spiner from '../common/spiner/Spiner';
import FindUser from './FindUser/FindUser';
import styles from './FindUsers.module.css';



const FindUsers = (props)=>{
    let [activePage,setActivePage]= useState(1);

    

    let pagesCount = Math.ceil(props.totalUserCount/props.pageSize)
    let pages=[];
    for(let i=1; i<=pagesCount; i++){
        pages.push(i);
    }
    let onChangePage=(numPage)=>{
        if(activePage === 1 && Math.sign(numPage)=== -1){
        }else if(activePage > pages.length && Math.sign(numPage)=== 1){
            setActivePage(activePage => activePage = pages.length)
            props.onChangePage(activePage)
        }else if (activePage + numPage >= pages.length){
            setActivePage(activePage => activePage = pages.length)
            props.onChangePage(pages.length)
        }else{
            setActivePage(activePage=> activePage + numPage)
            props.onChangePage(activePage)
        }
        
    };
    return( 
    
        <div className={styles.wrapper}>
            
                
            <div className={styles.pagination}>
                <div className={styles.paginator}>
                    <li onClick={()=>{onChangePage(-1)}} className={styles.prev}>Назад</li>
                    <li className={styles.current}>{activePage}</li>
                    <span>&hellip;</span>
                    <li className={styles.zxc} onClick={()=>{onChangePage(pages.length)}}>{pages.length}</li>
                    <li  onClick={()=>{onChangePage(1)}} className={styles.next}>Вперёд</li>
                </div>
                {props.isFetching && <Spiner/>}

                {/* {pages.map((p,index) => {
                    return<div key={index} className={ styles.allPages + ' ' + (props.currentPages === p && styles.activePages)} 
                                onClick={(e)=>{props.onChangePage(p)}}>{p}</div>})
                } */}
            </div>
            <div>
                {props.users.map((item) => 
                    <FindUser 
                        onUnfollow={props.onUnfollow}
                        onFollow={props.onFollow}
                        key={item.id} 
                        followed={item.followed} 
                        photos={item.photos} 
                        name={item.name} 
                        country={item.country} 
                        city={item.city} 
                        id={item.id}
                    />)
                }
            </div>
        </div>
    )
}

export default FindUsers;