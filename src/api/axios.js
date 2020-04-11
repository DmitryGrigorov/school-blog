import axios from 'axios'

const axiosFetch = axios.create({
    baseURL: `${window.location.origin}/api/`,
    timeout: 2000,
    withCredentials: true,
})

export default axiosFetch

 // axios('/user').then((response) => {
//     response.data;
// })