import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authResucer from "./auth-reducer";
import thunk from 'redux-thunk';


let redusers = combineReducers({

    Dialogs: dialogsReducer,
    Profile: profileReducer,
    UsersContainer: usersReducer,
    auth: authResucer

});

let store = createStore(redusers,applyMiddleware(thunk));


window.store = store;

export default store;