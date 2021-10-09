import React from "react";
import {Redirect} from 'react-router';
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class RederictComponent extends React.Component{
        render(){
            if (!this.props.isAuth){return <Redirect to='/login'/>}
            return <Component {...this.props}/>
        }
    }

    let RederictComponentContainer = connect(mapStateToProps)(RederictComponent);
    return RederictComponentContainer;
}