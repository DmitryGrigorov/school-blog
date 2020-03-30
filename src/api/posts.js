import axiosFetch from "./axios";

export function getList(params) {
  return axiosFetch({
    url: "posts",
    method: "GET",
    params
  });
}

export function getPostById(id) {
  return axiosFetch({
    url: `/posts/${id}`,
    method: "GET"
  });
}

export function createNewPost(data) {
  return axiosFetch({
    url: "/posts",
    method: "POST",
    data: data
  });
}
