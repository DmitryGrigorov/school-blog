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
    render(){
       
        return (
            <div>
             <div>Sign Up</div>
                <div>login</div>
                <Input
                    id="login"
                    value={this.props.dataForm.login}
                    onChange={this.props.changeFieldAction}
                />
                 <div>first name</div>
                <Input
                    id="firstname"
                    value={this.props.dataForm.firstname}
                    onChange={this.props.changeFieldAction}
                />
                <div>last name</div>
                <Input
                    id="lastname"
                    value={this.props.dataForm.lastname}
                    onChange={this.props.changeFieldAction}
                />
                <div>email</div>
                <Input
                    id="email"
                    value={this.props.dataForm.email}
                    onChange={this.props.changeFieldAction}
                />
                <div>password</div>
                <Input
                    id="password"
                    value={this.props.dataForm.password}
                    onChange={this.props.changeFieldAction}
                 />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    dataForm: state.signUp.dataForm
});
  
 export default connect(mapStateToProps, Actions)(SignUp);