const initState = {
 aUsers: []
}
const usersReducer = (state = initState, action) => {
 switch(action.type) {
  case 'GET-USERS_SUCCESS':
   return {
    ...state,
    aUsers: action.payload
   }
  default:
   return state
 }
}



export default usersReducer