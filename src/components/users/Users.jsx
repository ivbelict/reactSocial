import React from "react";
import s from "./Users.module.css";
// import axios from "axios";
import * as axios from "axios";
import usersPhoto from "./../../assets/images/user.png"
import {NavLink} from "react-router-dom";
import {userApi} from "../../api/api";
import {setUnfollowThunk} from "../../redux/users-reducer";

const Users = (props) => {


    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.usersDiv}>
        {props.isFetching ? null :


                props.users.map(u => <div className={s.users} key={u.id}>
                    <div className={s.userIcon}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : usersPhoto} alt="" className={s.usersAva}/>
                            <div className={s.userName}>{u.name}</div>
                        </NavLink>

                        {u.followed
                            ? <button onClick={() => {
                                props.setUnfollowThunk(u.id)
                            }} className={s.unfollow}>Unfollow</button>

                            : <button onClick={() => {
                                props.setFollowThunk(u.id)
                            }} className={s.follow}>Follow</button>
                        }

                    </div>
                    <div className={s.usersInfo}>
                        <div>
                            <div className={s.userName}>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{'u.location.country'},<br/>{'u.location.city'}</div>
                        </div>
                    </div>

                </div>)


        }

        {props.isFetching ? null :
            <div className={s.pageNumbers}>
                {pages.map(p => {
                    return <span id={s.pageNumber} onClick={() => {
                        props.setCurrentPage(p)
                    }} className={props.currentPage === p && s.currentPage}>{p}</span>
                })}
            </div>
        }

    </div>


}


export default Users;