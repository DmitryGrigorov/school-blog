import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input/index';
import * as Actions from './actions';

 class SignIn extends Component{
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
      };

      onClick=()=>{
          console.log('redirect to main');
      }
    render(){
       
        return (
            <div>
             <div>Sign In</div>
                <div>login</div>
                <div><Input
                    id="login"
                    value={this.props.dataForm.login}
                    onChange={this.props.changeFieldAction}
                /></div>
                
                <div>password</div>
                <div><Input
                    id="password"
                    value={this.props.dataForm.password}
                    onChange={this.props.changeFieldAction}
                 />
                 </div>
                

                 <button onClick={this.onClick}>
                     Login
                 </button>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    dataForm: state.signIn.dataForm
});
  
 export default connect(mapStateToProps, Actions)(SignIn);