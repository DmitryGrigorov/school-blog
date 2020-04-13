const initState = { data: null }
const readPostReducer = (state = initState, action) => {
 switch(action.type){
  case 'READ-DATA-OF-POST_SUCCESS':
   return {
    ...state,
    data: action.payload
   }
  case 'READ-POST_CLEAR-PAGE':
   return {
    ...state,
    data: null
   }

  default:
   return state
 }
}



export default readPostReducer