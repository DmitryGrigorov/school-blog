import axios from 'axios'



const axiosFetch = axios.create({
 baseURL: `${window.location.origin}/api/`,
 timeout: 6000,
 withCredentials: true
})



export default axiosFetch