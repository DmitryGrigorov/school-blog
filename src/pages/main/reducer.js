const initState = {
    posts: [],
    isScrollLoading: false
};



export default function mainReducer(state = initState, action) {
    switch (action.type) {
        case 'MAIN_PAGE_INIT_GET_POSTS_SUCCESS':
        case 'MAIN_PAGE_SCROLL_GET_POSTS_SUCCESS':
            return {
                ...state,
                posts: [...state.posts, ...action.payload],
                isScrollLoading: false
            };
        case 'MAIN_PAGE_INIT_GET_POSTS_REQUEST':
        case 'MAIN_PAGE_SCROLL_GET_POSTS_REQUEST':
            return {
                ...state,
                isScrollLoading: true
            };
        case 'MAIN_PAGE_SCROLL_GET_POSTS_FAIL':
            return {
                ...state,
                isScrollLoading: false,
            };
        case 'MAIN_PAGE_INCREASE_LIKE_SUCCESS':
        case 'MAIN_PAGE_DECREASE_LIKE_SUCCESS':
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
            }
        case 'MAIN_PAGE_LEAVE':
            return initState;
        default:
            return state;
    }

}