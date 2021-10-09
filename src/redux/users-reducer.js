import {userApi} from "../api/api";

const follow = 'follow',
unfollow = 'unfollow',
setUsers = 'set-users',
setCurrentPage = 'set-current-page',
setTotalCount = 'set-total-count',
togglePreloader = 'toggle-preloader'


let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 4,
    currentPage: 1,
    isFetching: true,

}

const usersReducer = (state = initialState,action) => {
    switch (action.type){
        case follow:
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.userID){
                        return {...u,followed: true}
                    }
                    return u
                }),

            }
        case unfollow:
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.userID){
                        return {...u,followed: false}
                    }
                    return u
                }),

            }
        case setUsers:
            return {...state, users: [...action.users]}
        case setCurrentPage:
            return {...state, currentPage: action.pageNumber}
        case setTotalCount:
            return {...state, totalCount: action.totalCount}
        case togglePreloader:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export default usersReducer;

export const followAC = (userID) => ({type:'follow', userID: userID});
export const unfollowAC = (userID) => ({type:'unfollow', userID: userID});
export const setUsersAC = (users) => ({type:'set-users', users});
export const setCurrentPageAC = (pageNumber) => ({type:'set-current-page', pageNumber});
export const setTotalCountAC = (totalCount) => ({type:'set-total-count', totalCount});
export const togglePreloaderAC = (isFetching) => ({type:'toggle-preloader', isFetching});


export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(togglePreloaderAC(true));
        userApi.getUsers(currentPage, pageSize)
            .then(data => {
                    console.log(data)
                    dispatch(togglePreloaderAC(false));
                    dispatch(setUsersAC(data.items));
                    dispatch(setTotalCountAC(data.totalCount < 20 ? data.totalCount : 41));
                }
            )
    }
}

export const setCurrentPageThunk = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(togglePreloaderAC(true));
        dispatch(setCurrentPageAC(pageNumber));
        userApi.getUsers(pageNumber, pageSize)
            .then(data => {
                    dispatch(togglePreloaderAC(false));
                    dispatch(setUsersAC(data.items));
                }
            )
    }
}


export const setUnfollowThunk = (userId) => {
    return (dispatch) => {
        userApi.unfollow(userId)
            .then(data => {
                if (data.resultCode == 0){
                    dispatch(unfollowAC(userId));
                }
            });
    }
}

export const setFollowThunk = (userId) => {
    return (dispatch) => {
        userApi.follow(userId)
            .then(data => {
                if (data.resultCode == 0){
                    dispatch(followAC(userId));
                }
            });
    }
}