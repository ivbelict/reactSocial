import React from "react";
import s from "./Post.module.css"

const Post = (props) => {



    return <div className={s.post}>
        <div className={s.post}>
            <img src={props.avatar} alt="" className={s.post__img}/>
            <span className={s.post__text}>{props.text}</span>
        </div>
    </div>
}

export default Post;