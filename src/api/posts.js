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

const increaseLikeOfPost = (id) => {
 return axiosFetch({
  url: 'posts/like/' + id,
  method: 'PUT'
 })
}

const increaseDislikeOfPost = (id) => {
 return axiosFetch({
  url: 'posts/dislike/' + id,
  method: 'PUT'
 })
}



export {getPosts, getPost, setPost, deletePost, increaseLikeOfPost, increaseDislikeOfPost}