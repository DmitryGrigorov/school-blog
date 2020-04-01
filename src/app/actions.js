import API from 'src/api'



export const authentication = () => {
 return async function(dispatch){
  try{
   const response = await API.user.authentication()
   dispatch({type: 'APPLICATION_AUTHETICATION', payload: response.data})
  } catch(error){
   dispatch({type: 'APPLICATION_AUTHETICATION_FAIL'})
  }
 }
}

export const signOut = () => {
 return async function(dispatch){
  try{
   const response = await API.user.signOut()
   dispatch({type: 'APPLICATION_SIGNOUT', payload: response.data})
  } catch(error){
   dispatch({type: 'APPLICATION_SIGNOUT_FAIL'})
  }
 }
}