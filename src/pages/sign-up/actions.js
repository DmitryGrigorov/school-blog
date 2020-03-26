import API from 'src/api'
import {push} from "connected-react-router";



const changeFieldAction = ({ fieldId, value }) => ({
  type: 'SIGNUP_CHANGE_DATA_FORM',
  payload: { fieldId, value }
})

const signUpAction = (dataForm) => {
 return async (dispatch) => {
  try{
   //dispatch({type: 'SIGNUP_REQUEST'})

   const response = await API.user.signUp(dataForm)
   dispatch({type: 'SIGNUP_SUCCESS', payload: response.data})
   dispatch(push('/'))
  } catch(error){ dispatch({type: 'SIGNUP_FAIL'}) }
 }
}



export {changeFieldAction, signUpAction}