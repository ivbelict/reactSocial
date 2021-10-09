import React from "react";
import s from "./../Dialogs.module.css";


let contacts = [
    {id: 0, name: 'Ivan'},
    {id: 1, name: 'Pavel'},
    {id: 2, name: 'Masha'}
]





const Contacts = (props) => {
    return <div className={s.contacts}>
            <img src= {props.avatar} alt="" className={s.contacts__avatar}/>
            <div className={s.contacts__name}>{ props.name }</div>
        </div>

}


export default Contacts;