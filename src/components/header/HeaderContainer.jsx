import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {setAuthDate} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true}).then(response => {
            if (response.data.resultCode === 0){
                let {id,email,login} = response.data.data
                this.props.setAuthDate(id,email,login)
            }

        })
    }

    render() {
        return <Header {...this.props}/>
    }


}

const mapStateToProps = (state) => {
    return {auth: state.auth}
}

export default connect(mapStateToProps,{setAuthDate})(HeaderContainer);