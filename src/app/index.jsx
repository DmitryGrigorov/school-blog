import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import * as Actions from './actions';
import Header from 'src/components/header';
import SignIn from 'src/pages/sign-in';
import SignUp from 'src/pages/sign-up';
import AboutPage from 'src/pages/about';
import MainPage from 'src/pages/main';
import Post from 'src/pages/post';
import NewPost from 'src/pages/new-post';
import UserInfoPage from 'src/pages/user-info';
//import NewPostPageOld from 'src/pages/new-post-old';
import './style';
class App extends Component {
    componentDidMount() 
    {
        this.props.auth();
    }
  render() {
      return(
        <>
        {/* <Header /> */}
        <Header user={this.props.user} signOut={this.props.signOut} />
       <Switch>
          {/* <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/new-post'>
            <h1>New post</h1>
            <NewPostPage/>
          </Route>
          <Route path='/about'>
            <h1>About</h1>
            <AboutPage/>
          </Route>
          <Route path='/'>
            <h1>MAIN PAGE</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi excepturi illum incidunt magni nam officia qui sed similique suscipit unde.
          </Route> */}
           <Route path='/sign-in' exact={true} component={SignIn} />
          <Route path='/sign-up' exact={true} component={SignUp} />
          {this.props.user && <Route path='/new-post' exact={true} component={NewPost} />}
          {this.props.user && <Route path='/user-info' exact={true} component={UserInfoPage} />}
          <Route path='/about' exact={true} component={AboutPage} />
          <Route path='/post/:id' exact={true} component={Post} />
          <Route path='/' exact={true} component={MainPage} />
        </Switch>
        </>
    );
  }
}
const mapStateToProps = (state) => {
    return ({
    //   counter: state.applicationReducer.counter, 
      user: state.applicationReducer.user
    });
  };

  export default connect(mapStateToProps, Actions)(App);