import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";


const App = (props) => {
    return (

        <div className="wrapper">
            <HeaderContainer/>
            <Navbar/>
            <Route path="/profile/:userId?" render={() => <ProfileContainer store={props.store}/>}/>
            <Route exact path="/dialogs" render={() => <Dialogs store={props.store}/>}/>
            <Route exact path="/users" render={() => <UsersContainer store={props.store}/>}/>
            <Route exact path="/login" render={() => <Login store={props.store}/>}/>
        </div>

    );
}






export default App;
