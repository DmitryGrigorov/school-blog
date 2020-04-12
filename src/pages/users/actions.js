import API from 'src/api'



const getUsersAction = () => {
 return async (dispatch) => {
  try{
   dispatch({type: 'GET-USERS_REQUEST'})

   const response = await API.user.getData()
   dispatch({
    type: 'GET-USERS_SUCCESS',
    payload: response.data
   })
  } catch (error){
   dispatch({type: 'GET-USERS_FAIL'})
  }
 }
}



export {getUsersAction}