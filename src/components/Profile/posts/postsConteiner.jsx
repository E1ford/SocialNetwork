import React from 'react';
import Posts from './posts';
import {addPostActionCreator,updateTextPostActionCreator} from '../../../redux/profileReducer';



let PostsConteiner = (props)=>{
    
    let sendPostClick=(value)=>{
        props.dispatch(addPostActionCreator(value))
        
    }
    let updateNewValue=(value)=> {
        props.dispatch(updateTextPostActionCreator(value))
    }

    return(   
        <Posts posts={props.posts} updateNewValue={updateNewValue} newValue={props.newValue} sendPostClick={sendPostClick}/>
    )
}
export default PostsConteiner;