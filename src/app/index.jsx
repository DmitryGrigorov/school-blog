import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions.js';
import Header from '../components/header/index';
import SignIn from '../pages/sign-in/index';
import FooterCounter from '../components/footer-counter/index';
import './style.css';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignIn/> 
        <FooterCounter />
       
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    counter: state.applicationReducer.counter
  });
};

export default connect(mapStateToProps, Actions)(App);