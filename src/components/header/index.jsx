import React from 'react'
import {Link} from 'react-router-dom'
import './style.css';



export default class Header extends React.Component{
 render(){
  return(
<header>
 <menu>
  <Link to='/'>Главная</Link>
  <Link to='/about'>О сайте</Link>
  <Link to='/new-post'>Новая запись</Link>
 </menu>

 {!this.props.user
  ?
  <menu>
   <Link to='/sign-up'>Регистрация</Link>
   <Link to='/sign-in'>Авторизация</Link>
  </menu>
  :
  <div>
   <p>Привет, {this.props.user.login}!</p>
   <button onClick={this.props.signOut}>Выйти</button>
  </div>
 }
  </header>
  )
 }
}
