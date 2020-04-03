import API from 'src/api';
import { push } from 'connected-react-router';

export function changeFieldAction ( fieldId, value ) {
  return {
    type: 'NEW-POST_CHANGE_DATA_FORM',
    payload: { fieldId, value }    
  }
};

export function createPostAction(data) {
  return async function(dispatch) {
    try {
      await API.posts.createPost(data);
      dispatch({ type: 'NEW_POST_CREATE_SUCCESS' });
      dispatch(push('/'));
    } catch (error) {

    }
  }
}