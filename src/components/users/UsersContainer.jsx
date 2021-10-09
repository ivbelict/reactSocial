import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC, getUsersThunk,
    setCurrentPageAC, setCurrentPageThunk, setFollowThunk,
    setTotalCountAC, setUnfollowThunk,
    setUsersAC,
    togglePreloaderAC,
    unfollowAC
} from "../../redux/users-reducer";
import Preloader from "../common/preloader/Preloader";
import {userApi} from "../../api/api";


class UsersAPI extends React.Component{
    //
    // constructor(props) {
    //     super(props);
    //
    //
    //
    //
    // }

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);

    }

    setCurrentPage = (pageNumber) => {
        this.props.setCurrentPageThunk(pageNumber,this.props.pageSize);
    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users}
                   totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   setCurrentPage={this.setCurrentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
                   setFollowThunk ={this.props.setFollowThunk}
                   setUnfollowThunk ={this.props.setUnfollowThunk}
            />
        </div>
    }


}

let mapStateToProps = (state) => {
    return {
        users: state.UsersContainer.users,
        totalCount: state.UsersContainer.totalCount,
        pageSize: state.UsersContainer.pageSize,
        currentPage: state.UsersContainer.currentPage,
        isFetching: state.UsersContainer.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         togglePreloader: (isFetching) => {
//             dispatch(togglePreloaderAC(isFetching))
//         }
//     }
// }



export default connect(mapStateToProps,{
    // follow: followAC,
    // unfollow: unfollowAC,
    // setUsers: setUsersAC,
    // setCurrentPage: setCurrentPageAC,
    // setTotalCount: setTotalCountAC,
    // togglePreloader: togglePreloaderAC,
    getUsersThunk,
    setCurrentPageThunk,
    setUnfollowThunk,
    setFollowThunk
})(UsersAPI);