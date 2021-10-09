import React from "react";
import s from "../../Dialogs.module.css";
import {sendMessageCreator, updateNewMessageCreator} from "../../../../redux/store";
import MessageForm from "./MessageForm";
import {connect} from "react-redux";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";



// let addMessage = React.createRef();
//
// const MessageFormContainer1 = (props) => {
//
//     const sendNewMessage = (text) => {
//         props.store.dispatch(sendMessageCreator(text))
//     }
//     const updateNewMessage = (text) => {
//         props.store.dispatch(updateNewMessageCreator(text))
//     }
//
//
//     return <MessageForm sendMessage={sendNewMessage}
//                         updateNewMessage={updateNewMessage}
//                         newMessageText={props.store.getState().Dialogs.newMessageText}/>
//
// }

let mapStateToProps = (state) => {
    return {
        messages: state.Dialogs.Messages,
        newMessageText: state.Dialogs.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(sendMessageCreator(text))
        },
        updateNewMessage: (text) => {
            dispatch(updateNewMessageCreator(text))
        }
    }
}


const MessageFormContainer = connect(mapStateToProps,mapDispatchToProps)(MessageForm);

export default MessageFormContainer;