import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import * as Actions from './actions'
import style from './style.css'

class SignUp extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
    //label: PropTypes.string.isRequired
  };
 
  onSubmit = () => {
    this.props.signUpAction(this.props.dataForm)
  }
  checkLogin = () => {
    console.log('Logging')
    this.props.checkLoginAction(this.props.dataForm.login)
    // const { checkLoginAction, dataForm } = this.props;
    // checkLoginAction(dataForm.value)
  }

  render() {
    //console.log(this.props)
    const { errors } = this.props
    //console.log(errors)
    return (
      <div className={style.signUpWrapper}>
        <div className={style.row}>
          <div>
            login
          </div>
          <div>
            <Input
              id="login"
              value={this.props.dataForm.login}
              onChange={this.props.changeFieldAction}
              onBlur={this.checkLogin}
              // error="Error"
              error={errors.login}
            />
          </div>  
        </div>

        <div className={style.row}>
          <div>
            First name
          </div>
          <div>
            <Input
              id="firstName"
              value={this.props.dataForm.firstName}
              onChange={this.props.changeFieldAction}
              error={errors.firstName}
            />
          </div>
        </div>

        <div className={style.row}>
          <div>
            Last name
          </div>
          <div>
            <Input
              id="lastName"
              value={this.props.dataForm.lastName}
              onChange={this.props.changeFieldAction}
              error={errors.lastName}
            />
          </div>
        </div>

        <div className={style.row}>
          <div>
            Email
          </div>
          <div>
            <Input
              id="email"
              value={this.props.dataForm.email}
              onChange={this.props.changeFieldAction}
              error={errors.email}
            />
          </div>
        </div>

        <div className={style.row}>
          <div>
            password
          </div>
          <div>
            <Input
              id="password"
              value={this.props.dataForm.password}
              onChange={this.props.changeFieldAction}
              error={errors.password}
            />
          </div>
          <div className={style.row}>
            <button onClick={this.onSubmit}>Зарегистрироваться</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataForm: state.signUpReducer.dataForm,
  errors: state.signUpReducer.errors
});

export default connect(mapStateToProps, Actions)(SignUp);
