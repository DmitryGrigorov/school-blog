import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Input from 'src/components/input'
import * as Actions from './actions'
import Button from '../../components/button'
import s from './style.css'



class SignUp extends React.Component{
 static propTypes = {
  dataForm: PropTypes.object.isRequired,
  changeFieldAction: PropTypes.func.isRequired,
  signUpAction: PropTypes.func.isRequired,
  checkLoginAction: PropTypes.func.isRequired
 }

 onRegistration = () => this.props.signUpAction(this.props.dataForm)

 checkLogin = () => this.props.checkLoginAction(this.props.dataForm.login)

 render(){
  const {errors, dataForm, changeFieldAction} = this.props

  return <section id={s.page}>
<div>
 <Input id='firstName' placeholder='Имя' value={dataForm.firstName} notice={errors.firstName && errors.firstName} onChange={changeFieldAction} />
</div>

<div>
 <Input id='lastName' placeholder='Фамилия' value={dataForm.lastName} notice={errors.lastName && errors.lastName} onChange={changeFieldAction} />
</div>

<div>
 <Input id='eMail' placeholder='e-mail' value={dataForm.eMail} notice={errors.email && errors.email} onChange={changeFieldAction} />
</div>

<div>
 <Input id='login' placeholder='login' value={dataForm.login} notice={errors.login && errors.login} onChange={changeFieldAction} onBlur={this.checkLogin} />
</div>

<div>
 <Input id='password' placeholder='password' value={dataForm.password} notice={errors.password && errors.password} onChange={changeFieldAction} />
</div>

<div>
 <Button type='submit' onClick={this.onRegistration}>Прописаться</Button>
</div>
  </section>
 }
}




const mapStateToProps = (state) => ({
 dataForm: state.signUp.dataForm,
 errors: state.signUp.errors
})
export default connect(mapStateToProps, Actions)(SignUp)