const initState = { data: null }
const postReducer = (state = initState, action) => {
 switch(action.type){
  case 'POST_GET_DATA_SUCCESS':
   return {
    ...state,
    data: action.payload
   }

  default:
   return state
 }
}



export default postReducer