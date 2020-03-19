import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Input from 'src/components/input'
import * as Actions from './actions'

class SignUp extends React.Component{
 static propTypes = {
  dataForm: PropTypes.object.isRequired,
  changeFieldAction: PropTypes.func.isRequired
 }

 render(){
  return <>
 <div>
  <label>First name</label>
  <Input id='firstName' value={this.props.dataForm.firstName} onChange={this.props.changeFieldAction} />
 </div>

 <div>
  <label>Last name</label>
  <Input id='lastName' value={this.props.dataForm.lastName} onChange={this.props.changeFieldAction} />
 </div>

 <div>
  <label>E-Mail</label>
  <Input id='eMail' value={this.props.dataForm.eMail} onChange={this.props.changeFieldAction} />
 </div>

 <div>
  <label>login</label>
  <Input id='login' value={this.props.dataForm.login} onChange={this.props.changeFieldAction} />
 </div>

 <div>
  <label>password</label>
  <Input id='password' value={this.props.dataForm.password} onChange={this.props.changeFieldAction} />
 </div>
  </>
 }
}




const mapStateToProps = (state) => ({dataForm: state.signUp.dataForm})
export default connect(mapStateToProps, Actions)(SignUp)