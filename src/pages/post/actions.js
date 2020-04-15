import API from 'src/api';
import {push} from 'connected-react-router';

export const getPostDataAction = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'POST_PAGE_GET_DATA_REQUEST'});
            const response = await API.posts.getPostById(id);
            dispatch({type: 'POST_PAGE_GET_DATA_SUCCESS', payload: response.data});
        } catch (e) {
            dispatch({type: 'POST_PAGE_GET_DATA_FAIL'});
        }
    }
}

export const increaseLikeCountAction = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'POST_PAGE_INCREASE_LIKE_REQUEST'});
            const response = await API.posts.increaseLike(id);
            dispatch({type: 'POST_PAGE_INCREASE_LIKE_SUCCESS', payload: response.data});

        } catch (e) {
            dispatch({type: 'POST_PAGE_INCREASE_LIKE_FAIL', payload: e});
        }
    }
}
export const decreaseLikeCountAction = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'POST_PAGE_DECREASE_LIKE_REQUEST'});
            const response = await API.posts.decreaseLike(id);
            dispatch({type: 'POST_PAGE_DECREASE_LIKE_SUCCESS', payload: response.data});
        } catch (e) {
            dispatch({type: 'POST_PAGE_DECREASE_LIKE_FAIL', payload: e});
        }
    }
}

export const leavePageAction = () => {
    return async function (dispatch) {
        try {
            dispatch({type: 'POST_PAGE_LEAVE'});
        } catch (e) {
        }
    }
}
export const deletePostAction = (postId, userId) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'POST_PAGE_DELETE_REQUEST'});
            const response = await API.posts.deletePost(postId);
            dispatch({type: 'POST_PAGE_DELETE_SUCCESS', payload: response.data});
            dispatch(push('/user/' + userId + '/my-posts'));
        } catch (e) {
            dispatch({type: 'POST_PAGE_DELETE_FAIL', payload: e});
        }
    }
}
export const changeFieldAction = ({ fieldId, value }) => ({
    type: 'NEW-POST_CHANGE_DATA_FORM',
    payload: { fieldId, value }
});
export const updatePostAction = (postId, userId, dataForm) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'POST_PAGE_UPDATE_REQUEST'});
            const response = await API.posts.updatePost(postId, dataForm);
            dispatch({type: 'POST_PAGE_UPDATE_SUCCESS', payload: response.data});
            dispatch(push('/user/' + userId + '/my-posts'));
        } catch (e) {
            dispatch({type: 'POST_PAGE_UPDATE_FAIL', payload: e});
        }
    }
}