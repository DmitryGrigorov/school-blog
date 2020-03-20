import axiosFetch from './axios'



const signIn = (data) => {
 return axiosFetch({
  url: 'users/signin',
  method: 'POST',
  data
 })
}

const signUp = (data) => {
  return axiosFetch({
  url: 'users/signup',
  method: 'POST',
  data
 })
}

const authentication = (data) => {
 return axiosFetch({
  url: 'users/auth/',
  method: 'GET'
 })
}

const signOut = (data) => {
 return axiosFetch({
  url: 'users/signout/',
  method: 'GET'
 })
}



export {signIn, signUp, authentication, signOut}