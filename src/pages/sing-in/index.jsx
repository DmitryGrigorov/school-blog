import React, { Component } from 'react';
import { connect } from 'react-redux';

import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import * as Actions from './actions';
import style from '../sign-up/style.css';

class SignIn extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
    singInAction: PropTypes.func.isRequired,
  };

  onSubmit = () => {
    const { dataForm } = this.props;
    this.props.singInAction(dataForm);
  };

  render() {
    return (
      <div className={style.signUpWrapper}>
        <div>
          <div>
            <Input
              id="login"
              placeholder="login"
              value={this.props.dataForm.login}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>
        <div>
          <div>
            <Input
              id="password"
              placeholder="password"
              value={this.props.dataForm.password}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>
        <button className={style.submit} onClick={this.onSubmit}>Войти</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataForm: state.signIn.dataForm
});

export default connect(mapStateToProps, {
  push,
  ...Actions
})(SignIn);
