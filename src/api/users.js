import axiosFetch from "./axios";

export function signIn(data) {
    return axiosFetch({
        url: 'users/signin',
        method: 'POST',
        data
    })
}

export function signUp(data) {
    return axiosFetch({
        url: 'users/signup/',
        method: 'POST',
        data
    })
}

export function auth() {
    return axiosFetch({
        url: 'users/auth/',
        method: 'GET',
    })
}

export function sighOut() {
    return axiosFetch ({
        url: 'users/signout/',
        method: 'GET',
    })
}

export function checkLogin(login) {
    return axiosFetch ({
        url: 'users/check-exists/',
        method: 'POST',
        data: {login}
    })
}

export function getUser(id) {
    return axiosFetch ({
        url: 'users/' + id,
        method: 'GET'
    })
}

export function changePassword(data) {
    return axiosFetch ({
        url: 'users/change/password/',
        method: 'PUT',
        data
    })
}

