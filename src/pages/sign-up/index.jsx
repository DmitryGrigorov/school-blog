import React from "react";
import { connect } from "react-redux";
import Input from "../../components/input";
import * as Actions from "./actions";
import style from "./style.css";

const enhance = connect(
  state => ({
    dataForm: state.signUp.dataForm,
    errors: state.signUp.errors
  }),
  dispatch => ({
    changeFieldAction: ({ fieldId, value }) =>
      dispatch(Actions.changeFieldAction({ fieldId, value })),
    signUpAction: dataForm => dispatch(Actions.signUpAction(dataForm)),
    checkLoginAction: login => dispatch(Actions.checkLoginAction(login))
  })
);

const SignUp = enhance(props => {
  const { errors, checkLoginAction, dataForm } = props;
  const onSubmit = () => {
    props.signUpAction(props.dataForm);
  };

  const checkLogin = () => {
    checkLoginAction(dataForm.login);
  };

  return (
    <div className={style.signUpWrapper}>
      <div className={style.row}>
        <Input
          id="login"
          placeholder="Login"
          value={props.dataForm.login}
          onChange={props.changeFieldAction}
          onBlur={checkLogin}
          error={errors.login}
        />
      </div>
      <div className={style.row}>
        <Input
          id="email"
          placeholder="Email"
          value={props.dataForm.email}
          onChange={props.changeFieldAction}
          error={errors.email}
        />
      </div>
      <div className={style.row}>
        <Input
          id="firstName"
          placeholder="First name"
          value={props.dataForm.firstName}
          onChange={props.changeFieldAction}
          error={errors.firstName}
        />
      </div>
      <div className={style.row}>
        <Input
          id="lastName"
          placeholder="Last name"
          value={props.dataForm.lastName}
          onChange={props.changeFieldAction}
          error={errors.lastName}
        />
      </div>
      <div className={style.row}>
        <Input
          id="password"
          placeholder="Password"
          value={props.dataForm.password}
          onChange={props.changeFieldAction}
          error={errors.password}
        />
      </div>
      <div className={style.row}>
        <button className={style.submit} onClick={onSubmit}>
          Register
        </button>
      </div>
    </div>
  );
});

export default SignUp;
