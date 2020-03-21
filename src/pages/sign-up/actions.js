import API from "src/api";
import { push } from "connected-react-router";

export const changeFieldAction = ({ fieldId, value }) => ({
  type: "SIGN-UP_CHANGE_FIELD",
  payload: { fieldId, value }
});

export const signUpAction = dataForm => async dispatch => {
  try {
    dispatch({ type: "SIGN-UP_REQUEST" });
    const response = await API.user.signUp(dataForm);
    console.log(response);
    if (response) {
      dispatch({ type: "SIGN-UP_SUCCESS" });
      dispatch(push("/sign-in"));
    } else dispatch({ type: "SIGN-UP_FAIL" });
  } catch (err) {
    dispatch({ type: "SIGN-UP_FAIL" });
  }
};
