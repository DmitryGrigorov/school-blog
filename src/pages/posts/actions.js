import API from 'src/api'



const getPostsAction = () => {
 return async (dispatch) => {
  try{
   dispatch({type: 'POSTS_GET-POSTS_REQUEST'})

   const response = await API.posts.getPosts({offsetStep: 12})
   dispatch({type: 'POSTS_GET-POSTS_SUCCESS', payload: response.data})
  } catch (error){
   dispatch({type: 'POSTS_GET-POSTS_FAIL'})
  }
 }
}

const getPostsWhenScrollingAction = (nPosts) => {
 return async (dispatch) => {
  try{
   dispatch({type: 'POSTS_GET-POSTS-WHEN-SCROLLING_REQUEST'})

   const response = await API.posts.getPosts({offset: nPosts, offsetStep: 4})
   dispatch({type: 'POSTS_GET-POSTS-WHEN-SCROLLING_SUCCESS', payload: response.data})
  } catch (error){
   dispatch({type: 'POSTS_GET-POSTS-WHEN-SCROLLING_FAIL'})
  }
 }
}

const increaseLikeAction = (idOfPost) => {
 return async (dispatch) => {
  try{
   dispatch({type: 'POSTS_INCREASE-LIKE_REQUEST'})

   const response = await API.posts.increaseLikeOfPost(idOfPost)
   dispatch({type: 'POSTS_INCREASE-LIKE_SUCCESS', payload: response.data})
  } catch (error){
   dispatch({type: 'POSTS_INCREASE-LIKE_FAIL'})
  }
 }
}

const increaseDislikeAction = (idOfPost) => {
 return async (dispatch) => {
  try{
   dispatch({type: 'POSTS_INCREASE-DISLIKE_REQUEST'})

   const response = await API.posts.increaseDislikeOfPost(idOfPost)
   dispatch({type: 'POSTS_INCREASE-DISLIKE_SUCCESS', payload: response.data})
  } catch (error){
   dispatch({type: 'POSTS_INCREASE-DISLIKE_FAIL'})
  }
 }
}

const setIsShowPopUpReadPost = () => {
 return async (dispatch) => {
  try{
   dispatch({type: 'POSTS_SET-IS-SHOW-POPUP-READ-POST_SUCCESS'})
  } catch(error){
   dispatch({type: 'POSTS_SET-IS-SHOW-POPUP-READ-POST_FAIL'})
  }
 }
}

const setIsShowPopUpAddPost = () => {
 return async (dispatch) => {
  try{
   dispatch({type: 'POSTS_SET-IS-SHOW-POPUP-ADD-POST_SUCCESS'})
  } catch(error){
   dispatch({type: 'POSTS_SET-IS-SHOW-POPUP-ADD-POST_FAIL'})
  }
 }
}



export {getPostsAction, getPostsWhenScrollingAction, increaseLikeAction, increaseDislikeAction, setIsShowPopUpReadPost, setIsShowPopUpAddPost}