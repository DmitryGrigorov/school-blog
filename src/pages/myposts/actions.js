import API from 'src/api'

export const getInitPostsAction = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MY_POSTS_INIT_GET_POSTS_REQUEST'});
            const response = await API.posts.getList({authorId: id, offsetStep: 3});
            dispatch({type: 'MY_POSTS_INIT_GET_POSTS_SUCCESS', payload: response.data});
        } catch (e) {
            dispatch({type: 'MY_POSTS_INIT_GET_POSTS_FAIL'});
        }
    }
}

export const getScrollPostsAction = (count, id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MY_POSTS_SCROLL_GET_POSTS_REQUEST'});
            const response = await API.posts.getList({authorId: id, offset: count, offsetStep: 2});
            dispatch({type: 'MY_POSTS_SCROLL_GET_POSTS_SUCCESS', payload: response.data});
        } catch (e) {
            dispatch({type: 'MY_POSTS_SCROLL_GET_POSTS_FAIL'});
        }
    }
}

export const leavePageAction = () => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MY_POSTS_LEAVE'});
        } catch (e) {
        }
    }
}

export const increaseLikeCountAction = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MY_POSTS_INCREASE_LIKE_REQUEST'});
            const response = await API.posts.increaseLike(id);
            dispatch({type: 'MY_POSTS_INCREASE_LIKE_SUCCESS', payload: response.data});
        } catch (e) {
            dispatch({type: 'MY_POSTS_INCREASE_LIKE_FAIL', payload: e});
        }
    }
}

export const decreaseLikeCountAction = (id) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MY_POSTS_DECREASE_LIKE_REQUEST'});
            const response = await API.posts.decreaseLike(id);
            dispatch({type: 'MY_POSTS_DECREASE_LIKE_SUCCESS', payload: response.data});
        } catch (e) {
            dispatch({type: 'MY_POSTS_DECREASE_LIKE_FAIL', payload: e});
        }
    }
}