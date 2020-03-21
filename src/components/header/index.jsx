import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';
export default class header extends Component{
    render(){
        return(
            <div className={style.wrapper}>
                <ul className={style.wrapperUl}>
                    <li><Link className={style.link} to="/">Главная</Link></li>
                    <li><Link className={style.link} to="/about">О сайте</Link></li>
                    <li><Link className={style.link} to="/new-post">Новый пост</Link></li>
                </ul>

                <ul className={style.wrapperUl}>
                    <li><Link className={style.link} to="/sign-in">Регистрация</Link></li>
                    <li><Link className={style.link} to="/sign-up">Логин</Link></li>
                </ul>
              
            </div>
        )
    }
}