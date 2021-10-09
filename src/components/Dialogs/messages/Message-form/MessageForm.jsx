import React from "react";
import s from "../../Dialogs.module.css";
import {sendMessageCreator, updateNewMessageCreator} from "../../../../redux/store";
import Messages from "../Messages";



let addMessage = React.createRef();




const MessageForm = (props) => {

    let messsagesElements = props.store.getState().Dialogs.Messages.map((m) => <Messages text={m.text}/>);

    const sendNewMessage = () => {
            let text = addMessage.current.value;
            props.sendMessage(text)
    }
    const updateNewMessage = () => {
        let text = addMessage.current.value;
        props.updateNewMessage(text)
    }


    return <div className={s.message__form}>
        { messsagesElements }
        <textarea onChange={updateNewMessage} ref={addMessage} className={s.message__area} value={props.newMessageText}></textarea>
        <input onClick={sendNewMessage} type="button" className={s.message__send} value="Send"></input>
    </div>

}

export default MessageForm;