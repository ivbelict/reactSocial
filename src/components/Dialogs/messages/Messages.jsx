import React from "react";
import s from "./../Dialogs.module.css";




const Messages = (props) => {
    return <div className={s.messages}>
        <div className={s.messages__item}>{props.text}</div>

    </div>
}

export default Messages;