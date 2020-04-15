import API from 'src/api'
import {push} from "connected-react-router";

export const changeFieldAction = ({ fieldId, value }) => ({
    type: 'NEW-POST_CHANGE_DATA_FORM',
    payload: { fieldId, value }
});

export const createPostAction = dataForm => {
    return async function (dispatch) {
        try {
            dispatch({type: 'NEW-POST_CREATE_DATA_FORM_REQUEST'});
            const response = await API.posts.createPost(dataForm);
            dispatch({type: 'NEW-POST_CREATE_DATA_FORM_SUCCESS', payload:response.data});
            dispatch(push('/'));
        } catch (e) {
            dispatch({type: 'NEW-POST_CREATE_DATA_FORM_FAIL',payload:e});
        }
    }
}
