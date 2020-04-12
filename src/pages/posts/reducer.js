const initState = {
 aPosts: [],
 isLoadingPosts: false,
 isShowPopUpReadPost: false,
 isShowPopUpAddPost: false
}
const postsReducer = (state = initState, action) => {
 switch(action.type) {
  case 'POSTS_GET-POSTS_SUCCESS':
   return {
    ...state,
    aPosts: action.payload
   }
  case 'POSTS_GET-POSTS-WHEN-SCROLLING_REQUEST':
   return {
    ...state,
    isLoadingPosts: true
   }
  case 'POSTS_GET-POSTS-WHEN-SCROLLING_SUCCESS':
   return {
    ...state,
    aPosts: [...state.aPosts, ...action.payload],
    isLoadingPosts: false
   }
  case 'POSTS_GET-POSTS-WHEN-SCROLLING_FAIL':
   return {
    ...state,
    isLoadingPosts: false
   }
  case 'POSTS_INCREASE-LIKE_SUCCESS':
   return {
    ...state,
    aPosts: state.aPosts.map(v => v.id === action.payload.id ? action.payload : v)
   }
  case 'POSTS_INCREASE-DISLIKE_SUCCESS':
   return {
    ...state,
    aPosts: state.aPosts.map(v => v.id === action.payload.id ? action.payload : v)
   }
  case 'POSTS_SET-IS-SHOW-POPUP-READ-POST_SUCCESS':
   return {
    ...state,
    isShowPopUpReadPost: !state.isShowPopUpReadPost
   }
  case 'POSTS_SET-IS-SHOW-POPUP-ADD-POST_SUCCESS':
   return {
    ...state,
    isShowPopUpAddPost: !state.isShowPopUpAddPost
   }
  default:
   return state
 }
}



export default postsReducer