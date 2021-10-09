let initialState = {
    Messages: [
        {id: 0, text: 'привет'},
        {id: 1, text: 'как дела'},
        {id: 2, text: 'кек'}
    ]
    ,
    Contacts: [
        {id: 0, name: 'Ivan', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWpZJdwAnNIgDPGHsNm9pk1kDjAno4sDjHJA&usqp=CAU'},
        {id: 1, name: 'Pavel', avatar:'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg'},
        {id: 2, name: 'Masha', avatar: 'https://www.meme-arsenal.com/memes/685b7b278dc7586616214c2896a2ac3b.jpg'}
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case "send-message":

            return {
                ...state,
                Messages: [...state.Messages, {id:3,text:action.text}],
                newMessagesText: ''
            }

            // this._state.Dialogs.newMessageText = action.text;
            // this.update(this._state);
            // if (state.newMessageText !== '') {
            //     state.Messages.push(action)
            // }
            //
            // console.log(action)
            // state.newMessageText = '';
            // return state;
        case "update-message":
            return {
                ...state,
                newMessageText: action.text,
            }
            // state.newMessageText = action.text;
            // return state;
        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessageCreator = (text) => ({type:'send-message', text: text});
export const updateNewMessageCreator = (text) => ({type:'update-message', text: text});