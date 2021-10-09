
let initialState = {
    Posts: [
        {id: 0, name:"я", text:"ку всем", avatar:"https://i.pinimg.com/originals/2c/96/34/2c9634d88d12767eac1f54189af3194c.jpg"},
        {id: 1, name:"не я", text:"второй посто", avatar:"https://i.pinimg.com/originals/56/17/3c/56173c889e69e1d0235f788fbbaa9d9f.jpg"},
        {id: 2, name:"вообще хз кто", text:"еще один", avatar:"https://www.meme-arsenal.com/memes/6d0fce2ab076987859e93863e01d75f9.jpg"},
    ],
    newPostText: 'KEK',
    ProfileUser: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add-post": {
            let newPost = {
                id: 3,
                text: state.newPostText,
                avatar: ''
            }
            // if (state.newPostText !== '') {
            //     var stateCopy = {...state};
            //     stateCopy.Posts = [...state.Posts];
            //     stateCopy.Posts.push(newPost);
            // }
            return {
                ...state,
                Posts: [...state.Posts, newPost],
                newPostText: ''
            };
            // stateCopy.Posts = [...state.Posts];
            // stateCopy.Posts.push(newPost);
            // stateCopy.newPostText = '';
            // console.log(stateCopy.Posts)
            // return stateCopy;
        }
        case "update-new-post": {
            return {
                ...state,
                newPostText: action.text
            };
            // return stateCopy;
            // stateCopy.newPostText = action.text;
        }
        case "set-users-profile":{
            return {...state, ProfileUser: action.usersProfile}
        }
        default:
            return state;
    }
}

export default profileReducer;


export const addPostCreator = () => ({type: 'add-post'});
export const updateNewPostCreator = (newText) => ({type: 'update-new-post', text: newText});
export const setUsersProfile = (usersProfile) => ({type:'set-users-profile',usersProfile})