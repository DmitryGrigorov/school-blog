import cloneDeep from 'lodash/cloneDeep'

const initState = {
 dataForm: {
  login: '',
  password: ''
 }
}

const merge = (state, someObject) => {
 const clonnedState = cloneDeep(state)

 return Object.assign(clonnedState, someObject)
}

const signInReducer = (state = initState, action) => {
 switch (action.type){
  case 'SIGNIN_CHANGE-DATA-FORM':
   return merge(state, {
    dataForm:{
     ...state.dataForm,
     [action.payload.fieldId]: action.payload.value
    }
   })
   case 'SIGNIN_REQUEST':
    return{}

   default:
    return state
 }
}



export default signInReducer