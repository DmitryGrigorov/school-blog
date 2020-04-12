const initState = { data: null }
const readPostReducer = (state = initState, action) => {
 switch(action.type){
  case 'READ-DATA-OF-POST_SUCCESS':
   return {
    ...state,
    data: action.payload
   }

  default:
   return state
 }
}



export default readPostReducer