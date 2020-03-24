import axiosFetch from './axios';

export function getList(params) {
  return axiosFetch({
    url: 'posts',
    method: 'GET',
    params
  });
}
