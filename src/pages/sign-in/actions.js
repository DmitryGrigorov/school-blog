import API from 'src/api'
import {push} from 'connected-react-router'



const changeFieldAction = ({ fieldId, value }) => ({
  type: 'SIGNIN_CHANGE-DATA-FORM',
  payload: { fieldId, value }
})

const signInAction = (dataForm) => {
 return async (dispatch) => {
  try{
   //dispatch({type: 'SIGNIN_REQUEST'})

   const response = await API.user.signIn(dataForm)
   dispatch({type: 'SIGNIN_SUCCESS', payload: response.data})
   dispatch(push('/'))
  } catch(error){
   dispatch({type: 'SIGNIN_FAIL'})
  }
 }
}



export {changeFieldAction, signInAction}