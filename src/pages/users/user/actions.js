import API from 'src/api'



const getDataOfUserAction = (id) => {
 return async (dispatch) => {
  try{
   dispatch({type: 'GET-DATA-OF-USER_REQUEST'})

   const response = await API.user.getData(id)
   dispatch({type: 'GET-DATA-OF-USER_SUCCESS', payload: response.data})
  } catch (error){
   dispatch({type: 'GET-DATA-OF-USER_FAIL'})
  }
 }
}



export {getDataOfUserAction}