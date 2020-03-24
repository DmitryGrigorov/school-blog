import API from 'src/api';
export const changeFieldAction = ({ fieldId, value }) => ({
    type: 'SIGN-UP_CHANGE_DATA_FORM',
    payload: { fieldId, value } 
  });
  
export const signUpAction = (data) =>{
  return async function(dispatch){
    try{
      dispatch({type: 'SIGN-UP_REQUEST'});
      const response= await API.user.signUp(data);
      dispatch ({type: 'SIGN-UP_SUCCESS', payload: response.data});
    } catch (error){
      dispatch({type: 'SIGN-UP_FAIL'});
    }
  }
};


