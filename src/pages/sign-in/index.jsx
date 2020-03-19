import React from 'react'
import {connect} from 'react-redux'
import {push} from 'connected-react-router'
import PropTypes from 'prop-types'
import Input from 'src/components/input'
import * as Actions from './actions'
import API from 'src/api'

class SignIn extends React.Component{
 static propTypes = {
  dataForm: PropTypes.object.isRequired,
  changeFieldAction: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
 }

 handlerOnAuthorisation = () => {
  const {dataForm} = this.props
  API.user.signIn(dataForm).then((response) => {
   console.log(response)
  })

  this.props.push('/')
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
  <button onClick={this.handlerOnAuthorisation}>Авторизоваться</button>
 </div>
  </>
 }
}




const mapStateToProps = (state) => ({dataForm: state.signIn.dataForm})
export default connect(mapStateToProps, {push, ...Actions})(SignIn)