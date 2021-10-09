import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUsersProfile} from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { Redirect } from 'react-router';
import {withAuthRedirect} from "../../HOC/withAuthRedirect";



class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUsersProfile(response.data);
        });
    }
    render(){
        // if (!this.props.isAuth){
        //     return <Redirect to='/login'/>
        // }
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.Profile.ProfileUser,
        // isAuth: state.auth.isAuth
    }
}


const withRouterProfileContainer = withRouter(ProfileContainer);

export default withAuthRedirect(connect(mapStateToProps,{setUsersProfile})(withRouterProfileContainer));