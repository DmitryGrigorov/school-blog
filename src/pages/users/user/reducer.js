const initState = { data: null }
const userReducer = (state = initState, action) => {
 switch(action.type){
  case 'GET-DATA-OF-USER_SUCCESS':
   return {
    ...state,
    data: action.payload
   }

  default:
   return state
 }
}



export default userReducer