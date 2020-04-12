import React from 'react'
import {connect} from 'react-redux'
import * as Actions from './actions'
import s from './style.css'
import PopUp from '../../../components/popUp'
import ChangePassword_popUp from './components/popUps/change-password'



class User extends React.Component{
 state = {
  isShowPopUp: false,
  idOfCurrentUser: null
 }
 setIsShowPopUp = () => this.setState({ isShowPopUp: !this.state.isShowPopUp })

 renderComponent = () => {
  this.props.getDataOfUserAction(this.props.match.params.id)
  this.setState({idOfCurrentUser: this.props.match.params.id})
 }
 componentDidMount(){ this.renderComponent() }
 componentDidUpdate(){
  if(this.state.idOfCurrentUser !== this.props.match.params.id){
   this.renderComponent()
  }
 }

 render(){
  const {data, dataOfCurrentUser} = this.props
  return !data ? 'loading...' : (
   <div className={s.popUp}>
    <img alt='bg' src={`//school-blog.ru/images/${data.avatar}`} />
    <div>
     <p><i>Ф.И.О.</i> <span><b>{data.lastName}</b> <b>{data.firstName}</b> <b>{data.patronymic}</b></span></p>
     <p><i>Мыло</i> <span>{data.email}</span></p>
     <p><i>id</i> <span>{data.id}</span></p>
     <p><i>login</i> <span>{data.login}</span></p>
     <p><i>role</i> <span>{data.role}</span></p>
     <p><i>admin</i> <span>{`${data.admin}`}</span></p>
     <p><i>Прописался</i> <span>{data.registrationDate}</span></p>
     <p><i>Понаписал</i> <span>{data.postsCount}</span></p>
     <p><i>Облюбовал</i> <span>{data.likesCount}</span></p>
     <p><i>Недолюбил</i> <span>{data.dislikesCount}</span></p>
    </div>
    {dataOfCurrentUser.login === data.login && <button onClick={this.setIsShowPopUp}>Сменить пароль</button>}
    {this.state.isShowPopUp && <PopUp setIsShowPopUp={this.setIsShowPopUp}><ChangePassword_popUp idOfUser={data.id}  setIsShowPopUp={this.setIsShowPopUp} /></PopUp>}
   </div>
  )
 }
}



const mapStateToProps = (state) => { return {
 data: state.user.data,
 dataOfCurrentUser: state.application.user
} }
export default connect(mapStateToProps, Actions)(User)