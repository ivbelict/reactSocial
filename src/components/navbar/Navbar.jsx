import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";





const Navbar = () => {
    return (

        <div className={s.nav}>
            <div className={s.nav__item}>
                <NavLink to="/profile" activeClassName={s.active} className={s.navlink}>Profile</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink to="/dialogs" activeClassName={s.active} className={s.navlink}>Messages</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink to="/users" activeClassName={s.active} className={s.navlink}>Users</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink to="/news" className={s.navlink} activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink to="/music" className={s.navlink} activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink to="/setting" className={s.navlink} activeClassName={s.active}>Settings</NavLink>
            </div>
        </div>



    )
}

export default Navbar;

