import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Input from 'src/components/input'
import * as Actions from './actions'
import Button from '../../components/button'
import s from './style.css'



class SignIn extends React.Component{
 static propTypes = {
  dataForm: PropTypes.object.isRequired,
  changeFieldAction: PropTypes.func.isRequired,
  signInAction: PropTypes.func.isRequired
 }

 onAuthorisation = () => {
  const {dataForm} = this.props
  this.props.signInAction(dataForm)
 }

 render(){
  return <section id={s.page}>
<div>
 <Input id='login' placeholder='login' value={this.props.dataForm.login} onChange={this.props.changeFieldAction} />
</div>
<div>
 <Input id='password' placeholder='password' value={this.props.dataForm.password} onChange={this.props.changeFieldAction} />
</div>
<div>
 <Button type='submit' placeholder='' onClick={this.onAuthorisation}>Войти</Button>
</div>
  </section>
 }
}




const mapStateToProps = (state) => ({dataForm: state.signIn.dataForm})
export default connect(mapStateToProps, Actions)(SignIn)