import API from 'src/api'



const getDataOfPostAction = (id) => {
 return async (dispatch) => {
  try{
   dispatch({type: 'POST_GET_DATA_REQUEST'})

   const response = await API.posts.getPost(id)
   dispatch({type: 'POST_GET_DATA_SUCCESS', payload: response.data})
  } catch (error){
   dispatch({type: 'POST_GET_DATA_FAIL'})
  }
 }
}



export {getDataOfPostAction}