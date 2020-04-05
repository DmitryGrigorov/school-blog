import React, { Component } from 'react';
import style from './style.css';

class MyPage extends Component {
  render() {
    return (
      <div className={style.myPageWrapper}>
        <div className={style.myPageLeft}>
          <img className={style.myPageImg}></img>
        </div>
        <section>
          <h1>Имя пользователя</h1>
            <ul className={style.myPageList}>
              <li><span className={style.myPageItem}>Имя:</span>Тут имя пользователя</li>
              <li><span className={style.myPageItem}>Фамилия:</span> Тут фамилия пользователя</li>
              <li><span className={style.myPageItem}>Отчество:</span> Тут отчество пользователя</li>
              <li><span className={style.myPageItem}>Дата регистрации:</span> Тут дата</li>
              <li><span className={style.myPageItem}>E-mail:</span> Тут имейл</li>
              <li><span className={style.myPageItem}>Количество постов:</span> Тут посты</li>
              <li><span className={style.myPageItem}>Количество поставленных лайков:</span> Тут лайки</li>
              <li><span className={style.myPageItem}>Количество поставленных дизлайков:</span> Тут дизлайки</li>
            </ul>
            <button className={style.myPageButton}>Изменить пароль</button>
          </section>
      </div>
    )
  }
};

export default MyPage;