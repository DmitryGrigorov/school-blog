import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as Actions from './actions'
import s from './style.css'



class Users extends React.Component{
 componentDidMount(){
  this.props.getUsersAction()
 }

 render(){
  const {users} = this.props

  return (
   <section id={s.users}>
    <table>
     <thead>
      <tr>
       <th>Погремуха</th>
       <th>Ф.И.О.</th>
       <th>Мыло</th>
       <th>Прописался</th>
       <th>Фоторобот</th>
      </tr>
     </thead>
    </table>
    <table>
     <tbody>
     {users.map((v) => {
      return (
      <tr key={v.id}>
       <td><Link to={`/users/${v.id}`}>{v.login}</Link></td>
       <td>{v.lastName} {v.firstName} {!v.patronymic && '-'}</td>
       <td>{v.email}</td>
       <td>{v.registrationDate}</td>
       <td><img alt='i' src={`//school-blog.ru/images/${v.avatar}`} /></td>
      </tr>
      )
     })}
     </tbody>
    </table>
   </section>
  )
 }
}



const mapStateToProps = (state) => { return { users: state.users.aUsers } }
export default connect(mapStateToProps, Actions)(Users)