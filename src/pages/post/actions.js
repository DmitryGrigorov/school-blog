import API from "src/api";

export const getPostDataAction = id => {
  return async function(dispatch) {
    try {
      dispatch({ type: "POST_PAGE_GET_DATA_REQUEST" });
      const response = await API.posts.getPostById(id);
      dispatch({ type: "POST_PAGE_GET_DATA_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "POST_PAGE_GET_DATA_FAIL" });
    }
  };
};

export const likePostAsync = id => async dispatch => {
  try {
    await API.posts.likePost(id);
    dispatch({ type: "POST_LIKE_SUCCESS" });
  } catch (error) {}
};

export const dislikePostAsync = id => async dispatch => {
  try {
    await API.posts.dislikePost(id);
    dispatch({ type: "POST_DISLIKE_SUCCESS" });
  } catch (error) {}
};
