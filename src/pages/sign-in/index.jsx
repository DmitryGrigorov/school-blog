import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input/index';
import * as Actions from './actions';

 class SignIn extends Component{
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
        label: PropTypes.string.isRequired
      };
    render(){
       
        return (
            <div>
             <div>Sign In</div>
                <div>login</div>
                <Input
                    id="login"
                    value={this.props.dataForm.login}
                    onChange={this.props.changeFieldAction}
                />
                <div>password</div>
                <Input
                    id="login"
                    value={this.props.dataForm.login}
                    onChange={this.props.changeFieldAction}
                 />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    dataForm: state.signIn.dataForm
});
  
 export default connect(mapStateToProps, Actions)(SignIn);