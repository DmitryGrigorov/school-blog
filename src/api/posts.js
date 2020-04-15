import axiosFetch from "./axios";

export function getList(params) {
    return axiosFetch({
        url: 'posts/',
        method: 'GET',
        params
    });
}

export function getPostById(id) {
    return axiosFetch({
        url: 'posts/' + id,
        method: 'GET',
    });
}
export function createPost(data) {
    return axiosFetch({
        url: 'posts/',
        method: 'POST',
        data
    });
}

export function increaseLike(id) {
    return axiosFetch({
        url: 'posts/like/' + id,
        method: 'PUT'
    });
}

export function decreaseLike(id) {
    return axiosFetch({
        url: 'posts/dislike/' + id,
        method: 'PUT'
    });


}

export function deletePost(id) {
    return axiosFetch({
        url: 'posts/' + id,
        method: 'DELETE'
    });
}
export function updatePost(id, data) {
    return axiosFetch({
        url: 'posts/' + id,
        method: 'PUT',
        data
    });
}