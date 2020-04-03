import API from 'src/api'



const getPostsAction = () => {
 return async (dispatch) => {
  try{
   dispatch({type: 'MAIN_GET-POSTS_REQUEST'})

   const response = await API.posts.getPosts({offsetStep: 10})
   dispatch({type: 'MAIN_GET-POSTS_SUCCESS', payload: response.data})
  } catch (error){
   dispatch({type: 'MAIN_GET-POSTS_FAIL'})
  }
 }
}

const getPostsWhenScrollingAction = () => {
 return async (dispatch) => {
  try{
   dispatch({type: 'MAIN_GET-POSTS-WHEN-SCROLLING_REQUEST'})

   const response = await API.posts.getPosts({offsetStep: 4})
   dispatch({type: 'MAIN_GET-POSTS-WHEN-SCROLLING_SUCCESS', payload: response.data})
  } catch (error){
   dispatch({type: 'MAIN_GET-POSTS-WHEN-SCROLLING_FAIL'})
  }
 }
}



export {getPostsAction}