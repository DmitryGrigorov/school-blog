const initState = { aPosts: [] }
const mainReducer = (state = initState, action) => {
 switch(action.type) {
  case 'MAIN_GET_POSTS_SUCCESS':
   return {
    ...state,
    aPosts: action.payload
   }

  default:
   return state
 }
}



export default mainReducer