import React, { Component } from 'react';
import Header from 'src/components/header';
import SignIn from 'src/pages/sing-in';
import './style.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignIn />
        <div className="footer">
        </div>
      </div>
    );
  }
}


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

// export default connect(mapStateToProps, Actions)(App);


