import axiosFetch from './axios'



const signIn = (data) => {
 return axiosFetch({
  URL: 'users/signin',
  method: 'POST',
  data
 })
}

const signUp = (data) => {
 return axiosFetch({
  URL: 'users/signup',
  method: 'POST',
  data
 })
}



export {signIn, signUp}