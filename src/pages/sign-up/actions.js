import API from 'src/api'
import {push} from "connected-react-router";



const changeFieldAction = ({ fieldId, value }) => ({
  type: 'SIGNUP_CHANGE_DATA_FORM',
  payload: { fieldId, value }
})

const signUpAction = (dataForm) => {
 return async (dispatch) => {
  try{
   dispatch({type: 'SIGNUP_REQUEST'})

   const response = await API.user.signUp(dataForm)
   dispatch({type: 'SIGNUP_SUCCESS', payload: response.data})
   dispatch(push('/posts'))
  } catch(error){
   if(error.response){
    dispatch({type: 'SIGNUP_FAIL', payload: error.response.data})
   }
  }
 }
}

const checkLoginAction = (login) => async (dispatch) => {
 try{
  const response = await API.user.checkLogin(login)
  dispatch({type: 'SIGNUP_CHECK-LOGIN_SUCCESS', payload: response.data})
 } catch(error){
  dispatch({type: 'SIGNUP_CHECK-LOGIN_FAIL'})
 }
}



export {changeFieldAction, signUpAction, checkLoginAction}