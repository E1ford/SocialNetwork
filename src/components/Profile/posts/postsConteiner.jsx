
import Posts from './posts';
import {addPostActionCreator,updateTextPostActionCreator} from '../../../redux/profileReducer';
import {connect} from 'react-redux'



let mapStateToProps =(state)=>{
    return{
        posts : state.profile.posts,
        newValue : state.profile.newValue

    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        sendPostClick:(value)=>{dispatch(addPostActionCreator(value))},
        updateNewValue:(value)=>{dispatch(updateTextPostActionCreator(value))}
    }
}

const PostsConteiner = connect (mapStateToProps,mapDispatchToProps)(Posts)

export default PostsConteiner;