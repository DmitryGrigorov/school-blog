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

const signOut = (data) => {
 return axiosFetch({
  url: 'users/signout',
  method: 'GET'
 })
}

const authentication = (data) => {
 return axiosFetch({
  url: 'users/auth',
  method: 'GET'
 })
}

const checkLogin = (login) => {
 return axiosFetch({
  url: 'users/check-exists',
  method: 'POST',
  data: {login}
 })
}

const getData = (id = null) => {
 const url = 'users' + (id !== null ? `/${id}` : '')
 return axiosFetch({
  url,
  method: 'GET',
  params: {offset: 0, offsetStep: 999999}
 })
}

const changePassword = (data) => {
 return axiosFetch({
  url: 'users/change/password',
  method: 'PUT',
  data: data
 })
}



export {signIn, signUp, authentication, signOut, checkLogin, getData, changePassword}