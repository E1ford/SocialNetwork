
import Posts from './posts';
import {addPost,updateTextPost} from '../../../redux/profileReducer';
import {connect} from 'react-redux'



let mapStateToProps =(state)=>{
    return{
        posts : state.profile.posts,
        newValue : state.profile.newValue

    }
}

const PostsConteiner = connect(mapStateToProps,{
    addPost,
    updateTextPost
})(Posts)

export default PostsConteiner;