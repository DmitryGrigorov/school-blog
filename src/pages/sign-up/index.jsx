import React, {Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import Input from 'src/components/input/index';
import * as Actions from './actions';

 class SignUp extends Component{
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
       
      };
      onSubmit=()=>{
        this.props.signUpAction(this.props.dataForm);
      }
    render(){
       
        return (
            <div>
             <div>Sign Up</div>
                <div>login</div>
                <div> <Input
                    id="login"
                    value={this.props.dataForm.login}
                    onChange={this.props.changeFieldAction}
                /></div>
               
                 <div>first name</div>
                 <div><Input
                    id="firstName"
                    value={this.props.dataForm.firstName}
                    onChange={this.props.changeFieldAction}
                /></div>
                
                <div>last name</div>
                <div> <Input
                    id="lastName"
                    value={this.props.dataForm.lastName}
                    onChange={this.props.changeFieldAction}
                /></div>
               
                <div>email</div>
                <div> <Input
                    id="email"
                    value={this.props.dataForm.email}
                    onChange={this.props.changeFieldAction}
                /></div>
               
                <div>password</div>
                <div><Input
                    id="password"
                    value={this.props.dataForm.password}
                    onChange={this.props.changeFieldAction}
                 /></div>
                <button onClick={this.onSubmit}>
                    Sign Up
                </button>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    dataForm: state.signUp.dataForm
});
  
 export default connect(mapStateToProps, {
     push,
     ...Actions})(SignUp);