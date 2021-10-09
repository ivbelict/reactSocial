import React from "react";
import s from "./Content.module.css";
import Preloader from "../../common/preloader/Preloader";
import usersPhoto from "./../../../assets/images/user.png"

const Content = (props) => {
    if (!props.profile){
        return <Preloader />
    }

    return <div className={s.content}>
        <img src={props.profile.photos.large !== null ? props.profile.photos.large : 'https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png'} alt="" className={s.img}/>
        <div>{props.profile.aboutMe}</div>
    </div>
}

export default Content;