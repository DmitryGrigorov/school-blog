import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input/index';
import * as Actions from './actions';

 class SignUp extends Component{
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
       
      };
      onClick=()=>{
          console.log("redirect to main");
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
                    id="firstname"
                    value={this.props.dataForm.firstname}
                    onChange={this.props.changeFieldAction}
                /></div>
                
                <div>last name</div>
                <div> <Input
                    id="lastname"
                    value={this.props.dataForm.lastname}
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
                <button onClick={this.onClick}>
                    Sign Up
                </button>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    dataForm: state.signUp.dataForm
});
  
 export default connect(mapStateToProps, Actions)(SignUp);