const initState = {
    posts: [],
    myPosts: [],
  };
  
  export default function myPageReducer(state = initState, action) {
    switch (action.type) {
      case 'MY_PAGE_GET_ALL_POSTS_SUCCESS':
        return {
          ...state,
          posts: action.payload
        };
      case 'MY_PAGE_GET_MY_POSTS_SUCCESS':
        return {
          ...state,
          myPosts: action.payload
        };
      default:
        return state;
    }
  }