import axiosFetch from './axios'



const getPosts = (params) => {
 return axiosFetch({
  url: 'posts',
  method: 'GET',
  params
 })
}

const getPost = (id) => {
 return axiosFetch({
  url: 'posts/' + id,
  method: 'GET'
 })
}

const setPost = (data) => {
 return axiosFetch({
  url: 'posts',
  method: 'POST',
  data
 })
}

const deletePost = (id) => {
 return axiosFetch({
  url: 'posts/' + id,
  method: 'DELETE'
 })
}



export {getPosts, getPost, setPost, deletePost}