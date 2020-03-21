//все запросы, связанные с юзером
import axiosFetch from './axios';

function signIn(data){ //принимает логин и пароль
    return axiosFetch({ //возвращает промис
        url: 'user/signin',
        method: 'POST',
        data: data
    });
}

function signUp(data){ 
    return axiosFetch({ 
        url: 'user/signup',
        method: 'POST',
        data: data
    });
}