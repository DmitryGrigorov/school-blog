import axios from 'axios';

// fetch ('/user').then((response)=>{
//     return response.json()
// }).then((res)=>{
// }); //так раньше делались запросы

const axiosFetch = axios.create({
    baseURL: `${window.location.origin}/api/` //адрес, на котором мы находимся. Зпросы шлем себе
});
axios ('./user').then((response)=>{
    response.data;
});
