import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import * as Actions from './actions';
import style from './style.css';

class SignUp extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
  };

  onSubmit = () => {
    this.props.signUpAction(this.props.dataForm);
  }

  checkLogin = () => {
    this.props.checkLoginAction(this.props.dataForm.login);
  };

  render() {
    const { errors } = this.props;

    return (
      <div className={style.signUpWrapper}>
        <div className={style.row}>
          <div>
            <Input
              id="login"
              placeholder="login"
              value={this.props.dataForm.login}
              onChange={this.props.changeFieldAction}
              onBlur={this.checkLogin}
              error={errors.login}
            />
          </div>
        </div>
        <div className={style.row}>
          <div>
            <Input
              id="firstName"
              placeholder="first name"
              value={this.props.dataForm.firstName}
              onChange={this.props.changeFieldAction}
              error={errors.firstName}
            />
          </div>
        </div>
        <div className={style.row}>
          <div>
            <Input
              id="lastName"
              placeholder="last name"
              value={this.props.dataForm.lastName}
              onChange={this.props.changeFieldAction}
              error={errors.lastName}
            />
          </div>
        </div>
        <div className={style.row}>
          <div>
            <Input
              id="email"
              placeholder="email"
              value={this.props.dataForm.email}
              onChange={this.props.changeFieldAction}
              error={errors.email}
            />
          </div>
        </div>
        <div className={style.row}>
          <div>
            <Input
              id="password"
              placeholder="password"
              value={this.props.dataForm.password}
              onChange={this.props.changeFieldAction}
              error={errors.password}
            />
          </div>
        </div>
        <div>
          <button className={style.submit} onClick={this.onSubmit}>Зарегистрироваться</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataForm: state.signUp.dataForm,
  errors: state.signUp.errors
});

export default connect(mapStateToProps, Actions)(SignUp);
