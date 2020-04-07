import API from 'src/api'



const getPostsAction = () => {
 return async (dispatch) => {
  try{
   dispatch({type: 'MAIN_GET-POSTS_REQUEST'})

   const response = await API.posts.getPosts({offsetStep: 12})
   dispatch({type: 'MAIN_GET-POSTS_SUCCESS', payload: response.data})
  } catch (error){
   dispatch({type: 'MAIN_GET-POSTS_FAIL'})
  }
 }
}

const getPostsWhenScrollingAction = (nPosts) => {
 return async (dispatch) => {
  try{
   dispatch({type: 'MAIN_GET-POSTS-WHEN-SCROLLING_REQUEST'})

   const response = await API.posts.getPosts({offset: nPosts, offsetStep: 4})
   dispatch({type: 'MAIN_GET-POSTS-WHEN-SCROLLING_SUCCESS', payload: response.data})
  } catch (error){
   dispatch({type: 'MAIN_GET-POSTS-WHEN-SCROLLING_FAIL'})
  }
 }
}

const increaseLikeAction = (idOfPost) => {
 return async (dispatch) => {
  try{
   dispatch({type: 'MAIN_INCREASE-LIKE_REQUEST'})

   const response = await API.posts.increaseLikeOfPost(idOfPost)
   dispatch({type: 'MAIN_INCREASE-LIKE_SUCCESS', payload: response.data})
  } catch (error){
   dispatch({type: 'MAIN_INCREASE-LIKE_FAIL'})
  }
 }
}

const increaseDislikeAction = (idOfPost) => {
 return async (dispatch) => {
  try{
   dispatch({type: 'MAIN_INCREASE-DISLIKE_REQUEST'})

   const response = await API.posts.increaseDislikeOfPost(idOfPost)
   dispatch({type: 'MAIN_INCREASE-DISLIKE_SUCCESS', payload: response.data})
  } catch (error){
   dispatch({type: 'MAIN_INCREASE-DISLIKE_FAIL'})
  }
 }
}



export {getPostsAction, getPostsWhenScrollingAction, increaseLikeAction, increaseDislikeAction}