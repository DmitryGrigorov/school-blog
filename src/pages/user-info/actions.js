import API from "src/api"
import { push } from 'connected-react-router'

export const getUserInfoAction = (id) => {
    return async function (dispatch) {
        try {
            dispatch({ type: 'USER-INFO_GET_USER_INFO_REQUIEST' })
            const response = await API.user.getUserInfoById(id)
            dispatch({
                type: 'USER-INFO_GET_USER_INFO_SUCCESS',
                payload: response.data
            })
        } catch (e) {
            dispatch({
                type: 'USER-INFO_GET_USER_INFO_FAIL'
            })
        }
    }
}

export const checkPasswordAction =(data)=>
{

}
export const changeFieldAction = ({ fieldId, value }) => ({
    type: 'USER-INFO_CHANGE_DATAFORM',
    payload: { fieldId, value }
});

export const changePasswordAction = (data) => {
    return async function(dispatch) 
    {
        try {
          dispatch({type: 'USER-INFO_CHANGE_PASSWORD_REQUEST'});
          const response = await API.user.changePassword(data);      
          if (response.data.success) {
            dispatch({type: 'USER-INFO_CHANGE_PASSWORD_SUCCESS', payload: response.data})
            dispatch(push('/'))
          } else {
            dispatch({type: 'USER-INFO_CHANGE_PASSWORD_SUCCESS', payload: response.data})
          }
        } catch(error) {
            if (error.response) {
              dispatch({type: 'USER-INFO_CHANGE_PASSWORD_FAIL', payload: error.response.data})
            }
        }
      }
}