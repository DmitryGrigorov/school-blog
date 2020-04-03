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
  {this.props.user && <Link to='/new-post'>Новая запись</Link>}
 </menu>

 {!this.props.user
  ?
  <menu>
   <Link to='/sign-up'>Регистрация</Link>
   <Link to='/sign-in'>Авторизация</Link>
  </menu>
  :
  <div>{this.props.user.login}, <span onClick={this.props.signOut}>уходи</span>!</div>
 }
  </header>
  )
 }
}
