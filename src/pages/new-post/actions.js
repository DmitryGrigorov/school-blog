import API from 'src/api'
import {push} from 'connected-react-router'



const changeFieldAction = (fieldId, value) => ({
 type: 'NEWPOST_CHANGE-DATA-FORM',
 payload: {fieldId, value}
})

const setPostAction = (data) => async (dispatch) => {
 try{
  await API.posts.setPost(data)
  dispatch({type: 'NEWPOST_SET_SUCCESS'})
  dispatch(push('/'))
 } catch(error){
  dispatch({type: 'NEWPOST_SET_FAIL'})
 }
}



export {changeFieldAction, setPostAction}