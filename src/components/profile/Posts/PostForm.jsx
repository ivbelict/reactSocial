import React from "react";
import s from "./Post__form.module.css"
import {addPostCreator, updateNewPostCreator} from "../../../redux/store";
import Post from "./Post/Post";

let newPostElement = React.createRef();





const PostForm = (props) => {

    let postElements = props.store.getState().Profile.Posts.map( (p) => <Post avatar={p.avatar} text={p.text}/> );

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost();
    }

    let changePost = () => {
        let text = newPostElement.current.value;
        props.changePost(text);
    }




    return <div className={s.post__form}>
        <form className={s.form}>
            <textarea onChange={changePost} ref={newPostElement} className={s.form__textarea} value={props.newPostText} cols="30" rows="2"></textarea>
            <input onClick={addPost} className={s.form__button} type="button" value="отправить"></input>
        </form>
        { postElements }
    </div>
}


export default PostForm;
