import API from 'src/api'



const changeFieldAction = (fieldId, value) => ({
 type: 'ADD-POST_CHANGE-FORM',
 payload: {fieldId, value}
})

const addPostAction = (data) => async (dispatch) => {
 try{
  await API.posts.setPost(data)
  dispatch({type: 'ADD-POST_SUCCESS'})
 } catch(error){
  dispatch({type: 'ADD-POST_FAIL'})
 }
}

const clearPage = () => {
 return (dispatch) => dispatch({type: 'ADD-POST_CLEAR-PAGE'})
}



export {changeFieldAction, addPostAction, clearPage}