import React, {Component} from 'react';
import style from './style.css';
import {NavLink} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className={style.wrapper}>
                <ul className={style.wrapperUl}>
                    <li><NavLink className={style.headerLink}  activeClassName={style.active} exact={true} to="/">Главная</NavLink></li>
                    {this.props.user
                    ?<> <li><NavLink className={style.headerLink} activeClassName={style.active} to="/new-post">Новый пост</NavLink></li>
                        <li><NavLink className={style.headerLink} activeClassName={style.active} to={'/user/'+this.props.user.id+'/my-posts/'}>Мои посты</NavLink></li></>
                    : null}
                </ul>
                {this.props.user
                    ?
                    <ul className={style.wrapperUl}>
                        <li><NavLink to={'/user/'+this.props.user.id} className={style.headerLink}>{this.props.user.login}</NavLink></li>
                        <li><NavLink to="/sign-in" className={style.headerLink}><div onClick={this.props.signOut}>Выйти</div></NavLink></li>
                    </ul>
                    :
                    <ul className={style.wrapperUl}>
                        <li><NavLink className={style.headerLink} activeClassName={style.active} to="/sign-up">Регистрация</NavLink></li>
                        <li><NavLink className={style.headerLink} activeClassName={style.active} to="/sign-in">Вход</NavLink></li>
                    </ul>
                }

            </div>
        )
    }
}
