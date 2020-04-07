const initState = {
 aPosts: [],
 isLoadingPosts: false
}
const mainReducer = (state = initState, action) => {
 switch(action.type) {
  case 'MAIN_GET-POSTS_SUCCESS':
   return {
    ...state,
    aPosts: action.payload
   }
  case 'MAIN_GET-POSTS-WHEN-SCROLLING_REQUEST':
   return {
    ...state,
    isLoadingPosts: true
   }
  case 'MAIN_GET-POSTS-WHEN-SCROLLING_SUCCESS':
   return {
    ...state,
    aPosts: [...state.aPosts, ...action.payload],
    isLoadingPosts: false
   }
  case 'MAIN_GET-POSTS-WHEN-SCROLLING_FAIL':
   return {
    ...state,
    isLoadingPosts: false
   }
  case 'MAIN_INCREASE-LIKE_SUCCESS':
   return {
    ...state,
    aPosts: state.aPosts.map(v => v.id === action.payload.id ? action.payload : v)
   }
  case 'MAIN_INCREASE-DISLIKE_SUCCESS':
   return {
    ...state,
    aPosts: state.aPosts.map(v => v.id === action.payload.id ? action.payload : v)
   }
  default:
   return state
 }
}



export default mainReducer