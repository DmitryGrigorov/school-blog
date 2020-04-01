import API from 'src/api'



const getPostsAction = () => {
 return async (dispatch) => {
  try{
   dispatch({type: 'MAIN_GET_POSTS_REQUEST'})

   const response = await API.posts.getPosts({offsetStep: 30})
   dispatch({type: 'MAIN_GET_POSTS_SUCCESS', payload: response.data})
  } catch (error){
   dispatch({type: 'MAIN_GET_POSTS_FAIL'})
  }
 }
}



export {getPostsAction}