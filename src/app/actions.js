import API from 'src/api';
export const increaseAction = (payload = 1) => {
    return ({
      type: 'APPLICATION_INCREASE',
      payload: payload
    });
  };
  
  export const decreaseAction = payload => ({
    type: 'APPLICATION_DECREASE',
    payload //:payload сокращаем
  });
  
  export const auth = () => {
    return async function (dispatch){
      try{ 
        const response = await API.user.auth();
      } catch(error){
       
      }
    }
  };
