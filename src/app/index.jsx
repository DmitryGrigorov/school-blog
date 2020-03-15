import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'src/components/header';
import SignUp from 'src/pages/sign-up';
import * as Actions from './actions';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignUp />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return ({
    login: state.signUp.dataForm.login,
    email: state.signUp.dataForm.email,
    firstName: state.signUp.dataForm.firstName,
    password: state.signUp.dataForm.login
  });
};

export default connect(mapStateToProps, Actions)(App);
