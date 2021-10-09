import React from "react";
import s from "./Post__form.module.css"
import {addPostCreator, updateNewPostCreator} from "../../../redux/store";
import PostForm from "./PostForm";
import {connect} from "react-redux";
import Post from "./Post/Post";

// let newPostElement = React.createRef();
//
//
//
//
//
// const PostFormContainer1 = (props) => {
//
//     let addPost = () => {
//         props.store.dispatch(addPostCreator())
//
//     }
//
//     let changePost = (text) => {
//         props.store.dispatch(updateNewPostCreator(text));
//     }
//
//
//
//
//     return <PostForm addPost={addPost}
//                      changePost={changePost}
//                      newPostText={props.store.getState().Profile.newPostText}/>
// }


let mapStateToProps = (state) => {
    return {
        posts: state.Profile.Posts,
        newPostText: state.Profile.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        changePost: (text) => {
            dispatch(updateNewPostCreator(text))
        }
    }
}

const PostFormContainer = connect(mapStateToProps,mapDispatchToProps)(PostForm);

export default PostFormContainer;
