import API from "src/api"
//import { push } from 'connected-react-router'

export const getInitPostsAction = () => {
    return async function(dispatch) {
        try {
            dispatch({
                type: 'MAIN_PAGE_INIT_GET_POSTS_REQUEST'
            })
            const response = await API.posts.getList({ offsetStep: 10})
            dispatch({
                type: 'MAIN_PAGE_INIT_GET_POSTS_SUCCESS', 
                payload: response.data
            })
        } catch(e) {
            dispatch({
                type: 'MAIN_PAGE_INIT_GET_POSTS_REQUEST'
            })
        }
    }
}

export const getScrollPostsAction = () => {
    return async function(dispatch) {
        try {
            dispatch({
                type: 'MAIN_PAGE_SCROLL_GET_POSTS_REQUEST'
            })
            const response = await API.posts.getList({ offset: NPosts, offsetStep: 3})
            dispatch({
                type: 'MAIN_PAGE_SCROLL_GET_POSTS_SUCCESS', 
                payload: response.data
            })
        } catch(e) {
            dispatch({
                type: 'MAIN_PAGE_SCROLL_GET_POSTS_REQUEST'
            })
        }
    }
}
