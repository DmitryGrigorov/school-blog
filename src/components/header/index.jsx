import React, {Component} from 'react';
import style from './style.css';
export default class header extends Component{
    render(){
        return(
            <div className={style.wrapper}>
                <ul className={style.wrapperUl}>
                    <li><a className={style.link} href="/">Главная</a></li>
                    <li><a className={style.link} href="/about">О сайте</a></li>
                    <li><a className={style.link} href="/new-post">Новый пост</a></li>
                </ul>

                <ul className={style.wrapperUl}>
                    <li><a className={style.link} href="/sign-in">Регистрация</a></li>
                    <li><a className={style.link} href="/sign-up">Логин</a></li>
                </ul>
              
            </div>
        )
    }
}