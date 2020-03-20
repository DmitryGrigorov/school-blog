const initState = {
 user: null
}

const applicationReducer = (state = initState, action) => {
 switch(action.type){
  case 'APPLICATION_AUTHETICATION':
  case 'SIGNIN_SUCCESS':
   return{
    ...state,
    user: action.payload
   }

  case 'APPLICATION_SIGNOUT':
   return {
    ...state,
    user: null
   }

  case 'SIGNIN_FAIL':
   return{

   }

  default: return state
 }
}



export default applicationReducer