import cloneDeep from 'lodash/cloneDeep'



const initState = {
 dataForm: {
  lastName: '',
  firstName: '',
  eMail: '',
  login: '',
  password: ''
 }
}

const merge = (state, someObject) => {
  const clonnedState = cloneDeep(state)

  return Object.assign(clonnedState, someObject)
}

const signUpReducer = (state = initState, action) => {
 switch(action.type){
  case 'SIGNUP_CHANGE_DATA_FORM':
   return merge(state, {
    dataForm: {
     ...state.dataForm,
     [action.payload.fieldId]: action.payload.value
    }
   })
   default:
    return state
 }
}



export default signUpReducer