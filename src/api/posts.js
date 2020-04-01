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

const deletePost = (id) => {
 return axiosFetch({
  url: 'posts/' + id,
  method: 'DELETE'
 })
}



export {getPosts, getPost, deletePost}