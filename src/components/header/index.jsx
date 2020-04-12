import React from 'react'
import {Link} from 'react-router-dom'
import './style.css';



export default class Header extends React.Component{
 render(){
  return(
<header>
 <menu>
  <Link to='/posts'>Записи</Link>
  <Link to='/users'>Пользователи</Link>
 </menu>

 {!this.props.user
  ?
  <menu>
   <Link to='/sign-up'>Регистрация</Link>
   <Link to='/sign-in'>Авторизация</Link>
  </menu>
  :
  <div>Я узнал тебя, <Link to={`/users/${this.props.user.id}`}>{this.props.user.login}</Link>. <span onClick={this.props.signOut}>Уходи</span>!</div>
 }
  </header>
  )
 }
}
