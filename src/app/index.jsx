import React, { Component } from 'react';
import Header from 'src/components/header';
import SignIn from 'src/pages/sing-in';
import './style.css';
import SignUp from "../pages/sing-up";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignUp />
        <div className="footer">
        </div>
      </div>
    );
  }
}


