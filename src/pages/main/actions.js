import API from "src/api"
//import { push } from 'connected-react-router'

export const getPostsAction = () => {
    return async function(dispatch) {
        try {
            dispatch({
                type: 'MAIN_PAGE_GET_POSTS_REQUEST'
            })
            const response = await API.posts.getList({ offsetStep: 30})
            dispatch({
                type: 'MAIN_PAGE_GET_POSTS_SUCCESS', 
                payload: response.data
            })
        } catch(e) {
            dispatch({
                type: 'MAIN_PAGE_GET_POSTS_REQUEST'
            })
        }
    }
}
