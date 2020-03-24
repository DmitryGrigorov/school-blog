import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'; 
import * as Actions from './actions.js';
import Header from '../components/header/index';
import SignIn from '../pages/sign-in/index';
import SignUp from '../pages/sign-up/index';
import About from '../pages/about/index';
import NewPost from '../pages/new-post/index';
import MainPage from '../pages/main';
import './style.css';
class App extends Component {
  componentDidMount(){ //приложение только что появилось на странице
    this.props.auth();
  }
  render() {
    return (
   
      // <> - фрагмент
      <>
        <Header user={this.props.user} signOut={this.props.signOut} />
        <Switch>
          <Route path='/sign-in' exact={true} component={SignIn} />
            
          <Route path='/sign-up' exact={true} component={SignUp} />
           
          <Route path='/new-post' exact={true} component={NewPost}/>
            
          <Route path='/about' exact={true} component={About}/>
            
          <Route path='/' exact={true} component={MainPage} />
            
        </Switch>
        
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
