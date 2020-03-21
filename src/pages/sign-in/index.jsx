import React, {Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import Input from 'src/components/input/index';
import * as Actions from './actions';
import API from 'src/api';

 class SignIn extends Component{
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
      };

      onSubmit=()=>{ //обычно запросы делают не отсюда
        //   this.props.push('/');
        const { dataForm } = this.props; //dataform состоит из логина и пароля
        API.user.signIn(dataForm).then( (response)=> {
            console.log(response);
        },(error)=>{
            console.log(error);
        });//посылаем данные
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
                

                 <button onClick={this.onSubmit}>
                     Login
                 </button>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    dataForm: state.signIn.dataForm
});
  
 export default connect(mapStateToProps, {
     push,
     ...Actions}
    )(SignIn);