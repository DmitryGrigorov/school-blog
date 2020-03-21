import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from './actions'

class SignIn extends Component{
    render(){
        return (
            <div>
                sign-in
            </div>
        )

    }
}
const mapStateToProps=(state)=>({
    dataForm: state.SignIn.dataForm
});

export default connect(mapStateToProps, Actions)(SignIn);