import './App.css';
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
// import state from "./state";


ReactDOM.render(
    <BrowserRouter>
            <Provider store={store}>
                    <App state={store.getState()}
                         store={store}
                        // addPost = {store.addPost.bind(store)}
                        // updateNewPost = {store.updateNewPost.bind(store)}
                         dispatch={store.dispatch.bind(store)}
                    />
            </Provider>
    </BrowserRouter>,
    document.getElementById('root'));



// console.log(store.getState())
// rerenderTree(store.getState());
// store.subscribe(() => {
//     let state = store.getState();
//     rerenderTree(state);
// });














