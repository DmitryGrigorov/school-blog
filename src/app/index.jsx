import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'; 
import * as Actions from './actions.js';
import Header from '../components/header/index';
import SignIn from '../pages/sign-in/index';
import SignUp from '../pages/sign-up/index';
//  import FooterCounter from '../components/footer-counter/index';
import './style.css';
class App extends Component {
  render() {
    return (
   
      // <> - фрагмент
      <>
        <Header />
        <Switch>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/new-post'>
            <h1>New post</h1>
          </Route>
          <Route path='/about'>
            <h1>About</h1>
          </Route>
          <Route path='/'>
            <h1>MAIN PAGE</h1>
          </Route>
        </Switch>
        {/* <FooterCounter counter={this.props.counter} increaseAction={this.props.increaseAction} decreaseAction={this.props.decreaseAction}/>  */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    counter: state.applicationReducer.counter
  });
};

export default connect(mapStateToProps, Actions)(App);