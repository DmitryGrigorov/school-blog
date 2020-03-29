import React, { Component } from 'react';
import './style.css';
import MainPage from '../pages/mainPage';
import {Switch} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <MainPage/>
        </Switch>
      </div>
    );
  }
}


