import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'


const Header = (props) => {
    return (
        <div className={s.header}>
            <a href="#"><img className="logo" src="https://c0.klipartz.com/pngpicture/521/444/gratis-png-diseno-grafico-lobo.png" alt="" /></a>
            {props.auth.isAuth ?
                <div className={s.login}>{props.auth.login}</div> :
                <div className={s.login}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
            }
        </div>

    )
}

export default Header;