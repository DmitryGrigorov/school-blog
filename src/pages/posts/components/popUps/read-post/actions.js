import API from 'src/api'



const readDataOfPostAction = (id) => {
 return async (dispatch) => {
  try{
   dispatch({type: 'READ-DATA-OF-POST_REQUEST'})

   const response = await API.posts.getPost(id)
   dispatch({type: 'READ-DATA-OF-POST_SUCCESS', payload: response.data})
  } catch (error){
   dispatch({type: 'READ-DATA-OF-POST_FAIL'})
  }
 }
}



export {readDataOfPostAction}