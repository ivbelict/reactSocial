import React from "react";
import s from "./Dialogs.module.css"
import Contacts from "./Сontacts/Contacts";
import Messages from "./messages/Messages";
import MessageForm from "./messages/Message-form/MessageForm";
import MessageFormContainer from "./messages/Message-form/MessageFormContainer";
import {Redirect} from 'react-router';


const Dialogs = (props) => {
    // console.log(props.store.getStore())
    let state = props.store.getState();
    // let messsagesElements = state.Dialogs.Messages.map((m) => <Messages text={m.text}/>);
    let contanctsElements = state.Dialogs.Contacts.map((c) => <Contacts name={c.name} id={c.id} avatar={c.avatar}/>);

    if (!state.auth.isAuth){
        return <Redirect to='/login'/>
    }
    return <div className={s.dialogs}>
        <div className={s.contactsItems}>
            { contanctsElements }
        </div>
        <div className={s.messagesItems}>
            <MessageFormContainer store={props.store}/>
        </div>



    </div>


}


export default Dialogs;