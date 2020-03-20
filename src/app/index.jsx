import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions.js';
class App extends Component {
  render() {
    return (
      <div>
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