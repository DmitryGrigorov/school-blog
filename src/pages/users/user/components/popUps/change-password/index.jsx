import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Input from 'src/components/input'
import Textarea from 'src/components/textarea'
import Button from 'src/components/button'
import * as Actions from './actions'
import s from './style.css'



class ChangePassword_popUp extends React.Component{
 static propTypes = {
  data: PropTypes.object.isRequired,
  changeFieldAction: PropTypes.func.isRequired,
  changePasswordAction: PropTypes.func.isRequired
 }

 handlerOnChange = ({fieldId, value}) => this.props.changeFieldAction(fieldId, value)

 handlerOnClick = () => {
  this.props.changePasswordAction(this.props.data)
  //this.props.setIsShowPopUp()
 }

 render(){
  const {errors, data} = this.props

  return (
   <div className={s.popUp}>
    <div>
     <Input id='currentPassword' placeholder='Текущий пароль' notice={errors.currentPassword && errors.currentPassword} value={data.currentPassword} onChange={this.handlerOnChange} />
    </div>
    <div>
     <Input id='newPassword' placeholder='Новый пароль' notice={errors.newPassword && errors.newPassword} value={data.newPassword} onChange={this.handlerOnChange} />
    </div>
    <div>
     <Button type='submit' onClick={this.handlerOnClick}>Отправить</Button>
    </div>
   </div>
  )
 }
}




const mapStateToProps = (state) => ({
 data: state.changePasswordOfUser.dataForm,
 errors: state.changePasswordOfUser.errors
})
export default connect(mapStateToProps, Actions)(ChangePassword_popUp)