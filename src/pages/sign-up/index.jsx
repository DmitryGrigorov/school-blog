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
        <div>Login</div>
        <Input
          id="login"
          value={props.dataForm.login}
          onChange={props.changeFieldAction}
          onBlur={checkLogin}
          error={errors.login}
        />
      </div>
      <div className={style.row}>
        <div>Email</div>
        <Input
          id="email"
          value={props.dataForm.email}
          onChange={props.changeFieldAction}
          error={errors.email}
        />
      </div>
      <div className={style.row}>
        <div>First name</div>
        <Input
          id="firstName"
          value={props.dataForm.firstName}
          onChange={props.changeFieldAction}
          error={errors.firstName}
        />
      </div>
      <div className={style.row}>
        <div>Last name</div>
        <Input
          id="lastName"
          value={props.dataForm.lastName}
          onChange={props.changeFieldAction}
          error={errors.lastName}
        />
      </div>
      <div className={style.row}>
        <div>Password</div>
        <Input
          id="password"
          value={props.dataForm.password}
          onChange={props.changeFieldAction}
          error={errors.password}
        />
      </div>
      <div className={style.row}>
        <button onClick={onSubmit}>Register</button>
      </div>
    </div>
  );
});

export default SignUp;
