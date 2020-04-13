import API from 'src/api';

export const getMyPostsAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MY_PAGE_GET_MY_POSTS_REQUEST' });
      const response = await API.posts.getList({
        authorId: id
      });
      dispatch({ type: 'MY_PAGE_GET_MY_POSTS_SUCCESS', payload: response.data })
    } catch(error) {
      dispatch({ type: 'MY_PAGE_GET_MY_POSTS_FAIL' });
    }
  }
};

export const getAllPostsAction = () => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MY_PAGE_GET_ALL_POSTS_REQUEST' });
      const response = await API.posts.getList();
      dispatch({ type: 'MY_PAGE_GET_ALL_POSTS_SUCCESS', payload: response.data })
    } catch(error) {
      dispatch({ type: 'MY_PAGE_GET_ALL_POSTS_FAIL' });
    }
  }
};

export function changePasswordAction(data) {
  return async function(dispatch) {
    try {
      await API.user.changePassword(data);
      dispatch({ type: 'CHANGE_PASSWORD_SUCCESS' });
      dispatch(push('/'));
    } catch (error) {

    }
  }
}
