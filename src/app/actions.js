import API from 'src/api'


export const auth = () => {
  return async function(dispatch) {
      try {
          const response = await API.users.auth();
          dispatch({type: 'APPLICATION-AUTH', payload: response.data})
      }  catch (e) {
          console.log(e);
      }
  }
};

export const signOut = () => {
    return async function(dispatch){
        try {
            const response = await API.users.sighOut();
            dispatch({type: 'APPLICATION-SIGN-OUT', payload: response.data});
        } catch (e) {
            console.log(e)
        }
    }
}
