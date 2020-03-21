import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'; 
import * as Actions from './actions.js';
import Header from '../components/header/index';
import SignIn from '../pages/sign-in/index';
import SignUp from '../pages/sign-up/index';
import About from '../pages/about/index';
import NewPost from '../pages/new-post/index';
//  import FooterCounter from '../components/footer-counter/index';
import './style.css';
class App extends Component {
  render() {
    return (
   
      // <> - фрагмент
      <>
        <Header user={this.props.user} />
        <Switch>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/new-post'>
            <NewPost />
          </Route>
          <Route path='/about'>
            <About />
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
    counter: state.applicationReducer.counter,
    user: state.applicationReducer.user //добавляем user в пропсы
  });
};

export default connect(mapStateToProps, Actions)(App);
