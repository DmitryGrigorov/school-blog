import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions.js';
import Header from '../components/header/index';
import SignIn from '../pages/sign-in/index';
import SignUp from '../pages/sign-up/index';
//  import FooterCounter from '../components/footer-counter/index';
import './style.css';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignIn/>
        <SignUp/> 

        
        {/* <FooterCounter counter={this.props.counter} increaseAction={this.props.increaseAction} decreaseAction={this.props.decreaseAction}/>  */}
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