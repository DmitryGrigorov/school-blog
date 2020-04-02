import API from "src/api";

export const changeFieldAction = ({ fieldId, value }) => ({
  type: "MODAL_CHANGE_DATA_FORM",
  payload: { fieldId, value }
});

export const fetchUserData = id => async dispatch => {
  try {
    dispatch({ type: "FETCH_USER_DATA_REQUEST" });
    const response = await API.user.getUserData(id);
    dispatch({ type: "FETCH_USER_DATA_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "FETCH_USER_DATA_FAILURE" });
  }
};
