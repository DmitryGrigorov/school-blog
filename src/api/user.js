//все запросы, связанные с юзером
import axiosFetch from './axios';

export function signIn(data){ //принимает логин и пароль
    return axiosFetch({ //возвращает промис
        url: 'users/signin',
        method: 'POST',
        data: data
    });
}

export function signUp(data){ 
    return axiosFetch({ 
        url: 'users/signup',
        method: 'POST',
        data: data
    });
}

export function auth(){
    return axiosFetch({
        url: 'users/auth',
        method: 'GET'
    });
}