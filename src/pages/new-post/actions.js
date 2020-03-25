import API from "src/api";
import { push } from "connected-react-router";

export const newPostAction = ({ fieldId, value }) => ({
  type: "NEW_POST_FORM",
  payload: { fieldId, value }
});

export const createNewPostAction = data => async dispatch => {
  try {
    console.log(data);
    dispatch({ type: "CREATE_NEW_POST_REQUEST" });
    const response = await API.posts.postNewPost(data);
    dispatch({ type: "CREATE_NEW_POST_SUCCESS" });
    dispatch(push("/"));
  } catch (error) {
    dispatch({ type: "CREATE_NEW_POST_FAIL" });
  }
};
