import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        Dialogs: {
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
        },
        Profile: {
            Posts: [
                {id: 0, name:"я", text:"ку всем", avatar:"https://i.pinimg.com/originals/2c/96/34/2c9634d88d12767eac1f54189af3194c.jpg"},
                {id: 1, name:"не я", text:"второй посто", avatar:"https://i.pinimg.com/originals/56/17/3c/56173c889e69e1d0235f788fbbaa9d9f.jpg"},
                {id: 2, name:"вообще хз кто", text:"еще один", avatar:"https://www.meme-arsenal.com/memes/6d0fce2ab076987859e93863e01d75f9.jpg"},
            ],
            newPostText: 'KEK',
        },
    },
    getState(){
        return this._state;
    },
    update(){
       console.log('false')
    },

    subscribe(rerenderTree){
        this.update = rerenderTree;
    },

    dispatch(action){

        this._state.Profile = profileReducer(this._state.Profile,action);
        this._state.Dialogs = dialogsReducer(this._state.Dialogs, action);
        this.update(this._state)


       // if (action.type === "add-post"){
       //     let newPost = {
       //         id: 3,
       //         text: this._state.Profile.newPostText,
       //         avatar: ''
       //     }
       //     if (this._state.Profile.newPostText === ''){
       //         return false;
       //     }
       //     this._state.Profile.Posts.push(newPost);
       //     this._state.Profile.newPostText = '';
       //     this.update(this._state);
       // }
       // else if (action.type === "update-new-post"){
       //     this._state.Profile.newPostText = action.text;
       //     this.update(this._state);
       // }
       // else if (action.type == "send-message"){
       //     // this._state.Dialogs.newMessageText = action.text;
       //     // this.update(this._state);
       //     if (this._state.Dialogs.newMessageText == ''){
       //         return false;
       //     }
       //     this._state.Dialogs.Messages.push(action)
       //     console.log(action)
       //     this.update(this._state)
       //     this._state.Dialogs.newMessageText = '';
       //
       //
       // }
       // else if (action.type === "update-message"){
       //     this._state.Dialogs.newMessageText = action.text;
       //     this.update(this._state)
       // }
    }

}


export const addPostCreator = () => ({type: 'add-post'});
export const updateNewPostCreator = (newText) => ({type: 'update-new-post', text: newText});
export const sendMessageCreator = (text) => ({type:'send-message', text: text});
export const updateNewMessageCreator = (text) => ({type:'update-message', text: text});


export default store;




