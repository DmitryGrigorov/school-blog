import cloneDeep from 'lodash/cloneDeep'

const initState = {
 dataForm: {
  currentPassword: '',
  newPassword: ''
 },
 errors: {
  currentPassword: '',
  newPassword: ''
 }
}

const merge = (state, someObject) => {
 const clonnedState = cloneDeep(state)

 return Object.assign(clonnedState, someObject);
}

const getFormErrors = (payload) => {
 const mapErrorFromServer = (errorFromServer) => {
  const errorCode = Object.keys(errorFromServer)[0]

  switch (errorCode){
   case 'minLength':
    return '-1|Не менее 3 знаков'
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

const changePasswordOfUserReducer = (state = initState, action) => {
 switch (action.type){
  case 'CHANGE-PASSWORD_CHANGE-FORM':
   return merge(state, {
    dataForm:{
     ...state.dataForm,
     [action.payload.fieldId]: action.payload.value
    }
   })
  case 'CHANGE-PASSWORD_SUCCESS':
   return {
    ...state,
    errors: {
     ...state.errors,
     currentPassword: action.payload.success ? '1|Угадал' : '-1|Не угадал, пробуй ещё...'
    }
   }
  case 'CHANGE-PASSWORD_FAIL':
   return{
    ...state,
    errors: getFormErrors(action.payload)
   }
  default:
   return state
 }
}



export default changePasswordOfUserReducer