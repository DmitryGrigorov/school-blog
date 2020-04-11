import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Header from 'src/components/header'
import SignIn from 'src/pages/sign-in'
import NewPost from 'src/pages/new-post'
import MainPage from 'src/pages/main'
//import FooterCounter from 'src/component/footer-counter'
import SignUp from 'src/pages/sign-up'
import * as Actions from './actions'
import './style.css';

class App extends Component {

  componentDidMount() {
    this.props.auth()
  }

  render() {
    return (
      <>
        <Header user={this.props.user} signOut={this.props.signOut}/>
        <Switch>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/about'>
            <h1>Information about project</h1>
          </Route>
          <Route path='/new-post' component={NewPost} />
          <Route path='/'>
            <MainPage />
          </Route>
        </Switch>

        {/* <div className="footer">
          count = {this.props.counter}
          <button
            onClick={() => this.props.increaseAction(1)}
          >
            increase 1
          </button>
          <button
            onClick={() => this.props.increaseAction(55)}
          >
            increase 55
          </button>
          <button
            onClick={() => this.props.decreaseAction(1)}
          >
            decrease
          </button>
        </div> */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    counter: state.appReducer.counter,
    user: state.appReducer.user
  });
};

// const mapDispatchToProps = (dispatch) => {
//   return ({
//     dispatch: dispatch,
//     increaseAction: (payload) => {
//       dispatch(Actions.increaseAction(payload));
//     },
//     decreaseAction: (payload) => {
//       dispatch(Actions.decreaseAction(payload));
//     }
//   });
// };

export default connect(mapStateToProps, Actions)(App);
