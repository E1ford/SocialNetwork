import React from 'react';
import Posts from './posts';
import {addPostActionCreator,updateTextPostActionCreator} from '../../../redux/profileReducer';



let PostsConteiner = (props)=>{
    
    let sendPostClick=(value)=>{
        props.store.dispatch(addPostActionCreator(value))
        
    }
    let updateNewValue=(value)=> {
        props.store.dispatch(updateTextPostActionCreator(value))
    }

    return(   
        <Posts posts={props.store.getState().profile.posts} 
        updateNewValue={updateNewValue} 
        newValue={props.store.getState().profile.newValue} 
        sendPostClick={sendPostClick}/>
    )
}
export default PostsConteiner;