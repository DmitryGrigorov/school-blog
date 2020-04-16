const initState = {
    posts: [],
    isScrollLoading: false
};

export default function myPostsReducer(state = initState, action) {
    switch (action.type) {
        case 'MY_POSTS_INIT_GET_POSTS_SUCCESS':
        case 'MY_POSTS_SCROLL_GET_POSTS_SUCCESS':
            return {
                ...state,
                posts: [...state.posts, ...action.payload],
                isScrollLoading: false
            };
        case 'MY_POSTS_INIT_GET_POSTS_REQUEST':
        case 'MY_POSTS_SCROLL_GET_POSTS_REQUEST':
            return {
                ...state,
                isScrollLoading: true
            };
        case 'MY_POSTS_SCROLL_GET_POSTS_FAIL':
            return {
                ...state,
                isScrollLoading: false,
            };
        case 'POST_PAGE_DELETE_SUCCESS':
        case 'MY_POSTS_LEAVE':
            return initState;
        case 'POST_PAGE_UPDATE_SUCCESS':
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
            }
        case 'MY_POSTS_INCREASE_LIKE_SUCCESS':
        case 'MY_POSTS_DECREASE_LIKE_SUCCESS':
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
            }
        default:
            return state;
    }

}