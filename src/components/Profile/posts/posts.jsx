import React from 'react';
import styles from './posts.module.css';
import Post from './post/post';
import {addPostActionCreator,updateTextPostActionCreator} from '../../../redux/state';



let Posts = (props)=>{
   
    let content = props.posts.map((item) => <Post messages={item.messages} likes={item.likes}/>);

    let refReactTextarea=React.createRef();
    
    let click=()=>{
        props.dispatch(addPostActionCreator(refReactTextarea.current.value))
        
    }
    let value=()=> {
        props.dispatch(updateTextPostActionCreator(refReactTextarea.current.value))
    }



    return(   
        <div className={styles.posts}>
            <div className={styles.title}>
                <span>My posts</span>
            </div>
            <div className={styles.form}>
                <div>
                    <textarea onChange={value} value={props.newValue} ref={refReactTextarea} placeholder="alt+f4 что бы открыть игру"></textarea>
                </div>
                <div>
                    <button  onClick={click} className={styles.floatingButton}>запостить</button>
                </div>
            </div>
            {content}
        </div>
    )
}
export default Posts;