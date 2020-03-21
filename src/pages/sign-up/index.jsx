import React from "react";
import { connect } from "react-redux";
import Input from "../../components/input";
import * as Actions from "./actions";

const enhance = connect(
  state => ({
    dataForm: state.signUp.dataForm
  }),
  dispatch => ({
    changeFieldAction: ({ fieldId, value }) =>
      dispatch(Actions.changeFieldAction({ fieldId, value })),
    signUpAction: dataForm => dispatch(Actions.signUpAction(dataForm))
  })
);

const SignUp = enhance(props => {
  const onSubmit = () => {
    props.signUpAction(props.dataForm);
  };

  return (
    <div>
      <div>Login</div>
      <Input
        id="login"
        value={props.dataForm.login}
        onChange={props.changeFieldAction}
      />
      <div>Email</div>
      <Input
        id="email"
        value={props.dataForm.email}
        onChange={props.changeFieldAction}
      />
      <div>First name</div>
      <Input
        id="firstName"
        value={props.dataForm.firstName}
        onChange={props.changeFieldAction}
      />
      <div>Last name</div>
      <Input
        id="lastName"
        value={props.dataForm.lastName}
        onChange={props.changeFieldAction}
      />
      <div>Password</div>
      <Input
        id="password"
        value={props.dataForm.password}
        onChange={props.changeFieldAction}
      />
      <button onClick={onSubmit}>Register</button>
    </div>
  );
});

export default SignUp;
