import API from 'src/api'



const changeFieldAction = (fieldId, value) => ({
 type: 'CHANGE-PASSWORD_CHANGE-FORM',
 payload: {fieldId, value}
})

const changePasswordAction = (data) => async (dispatch) => {
 try{
  dispatch({type: 'CHANGE-PASSWORD_REQUEST'})

  const response = await API.user.changePassword(data)
  dispatch({type: 'CHANGE-PASSWORD_SUCCESS', payload: response.data})
 } catch(error){
  if(error.response){
   dispatch({type: 'CHANGE-PASSWORD_FAIL'})
  }
 }
}



export {changeFieldAction, changePasswordAction}