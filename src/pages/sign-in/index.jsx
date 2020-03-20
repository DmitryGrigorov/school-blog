import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Input from 'src/components/input'
import * as Actions from './actions'



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
  return <>
 <div>
  <label>login</label>
  <Input id='login' value={this.props.dataForm.login} onChange={this.props.changeFieldAction} />
 </div>
 <div>
  <label>password</label>
  <Input id='password' value={this.props.dataForm.password} onChange={this.props.changeFieldAction} />
 </div>
 <div>
  <button onClick={this.onAuthorisation}>Авторизоваться</button>
 </div>
  </>
 }
}




const mapStateToProps = (state) => ({dataForm: state.signIn.dataForm})
export default connect(mapStateToProps, Actions)(SignIn)