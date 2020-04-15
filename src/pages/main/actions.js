import API from 'src/api'

export const getInitPostsAction = () => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MAIN_PAGE_INIT_GET_POSTS_REQUEST'});
            const response = await API.posts.getList({offsetStep: 3});
            dispatch({type: 'MAIN_PAGE_INIT_GET_POSTS_SUCCESS', payload: response.data});
        } catch (e) {
            dispatch({type: 'MAIN_PAGE_INIT_GET_POSTS_FAIL'});
        }
    }
}

export const getScrollPostsAction = (count) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MAIN_PAGE_SCROLL_GET_POSTS_REQUEST'});
            const response = await API.posts.getList({offset: count, offsetStep: 2});
            dispatch({type: 'MAIN_PAGE_SCROLL_GET_POSTS_SUCCESS', payload: response.data});
        } catch (e) {
            dispatch({type: 'MAIN_PAGE_SCROLL_GET_POSTS_FAIL'});
        }
    }
}

export const increaseLikeCountAction = (id) => {
    return async function(dispatch) {
        try {
            dispatch({type:'MAIN_PAGE_INCREASE_LIKE_REQUEST'});
            const response = await API.posts.increaseLike(id);
            dispatch({type: 'MAIN_PAGE_INCREASE_LIKE_SUCCESS', payload: response.data});
        } catch (e) {
            dispatch({type: 'MAIN_PAGE_INCREASE_LIKE_FAIL', payload: e});
        }
    }
}

export const decreaseLikeCountAction = (id) => {
    return async function(dispatch) {
        try {
            dispatch({type:'MAIN_PAGE_DECREASE_LIKE_REQUEST'});
            const response = await API.posts.decreaseLike(id);
            dispatch({type: 'MAIN_PAGE_DECREASE_LIKE_SUCCESS', payload: response.data});
        } catch (e) {
            dispatch({type: 'MAIN_PAGE_DECREASE_LIKE_FAIL', payload: e});
        }
    }
}
export const leavePageAction = () => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MAIN_PAGE_LEAVE'});
        } catch (e) {
        }
    }
}