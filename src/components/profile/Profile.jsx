import React from "react";
import Post from "./Posts/Post/Post";
import s from "./Profile.module.css"
import Content from "./content/Content";
import PostFormContainer from "./Posts/PostFormContainer";

const Profile = (props) => {
    let state = props.store.getState();
    let postElements = props.store.getState().Profile.Posts.map( (p) => <Post avatar={p.avatar} text={p.text}/> );
    return (
        <div className={s.profile}>
            <Content profile={props.profile}/>
            <PostFormContainer store={props.store}/>
        </div>
    )
}

export default Profile;