import cloneDeep from 'lodash/cloneDeep'



const initState = {
 dataForm: {
  lastName: '',
  firstName: '',
  eMail: '',
  login: '',
  password: ''
 },
 errors: {
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

const getFormErrors = (payload) => {
 const mapErrorFromServer = (errorFromServer) => {
  const errorCode = Object.keys(errorFromServer)[0]

  switch (errorCode){
   case 'unique':
    return '-1|Данный login занят'
   case 'isRequired':
    return '-1|Поле обязательно для заполнения!'
   default:
    return errorCode
  }
 }

 const errorKeys = Object.keys(payload)
 const errors = errorKeys.reduce((result, errorKey) => {
  result[errorKey] = mapErrorFromServer(payload[errorKey])

  return result
 }, {})

 return errors
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
  case 'SIGNUP_CHECK-LOGIN_SUCCESS':
   return {
    ...state,
    errors: {
     ...state.errors,
     login: action.payload.exists ? 'Данный login занят' : ''
    }
   }
  case 'SIGNUP_FAIL':
    return{
     ...state,
     errors: getFormErrors(action.payload)
    }
   default:
    return state
 }
}



export default signUpReducer