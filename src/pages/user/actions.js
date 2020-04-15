import API from 'src/api'

export const getUserAction = (id) => {
    return async function(dispatch){
        try {
            dispatch({type: "USER_PAGE_GET_USER_REQUEST"});
            const response = await API.users.getUser(id);
            dispatch({type: "USER_PAGE_GET_USER_SUCCESS", payload: response.data});
        } catch (e) {
            dispatch({type: "USER_PAGE_GET_USER_FAIL"});
        }
    }
}
export const leavePageAction = () => {
    return async function(dispatch){
        try {
            dispatch({type: 'USER_PAGE_LEAVE'});
        } catch (e) {
        }
    }
}
export const isShowModalAction = () => {
    return async function(dispatch){
        try {
            dispatch({type: 'USER_PAGE_SHOW_MODAL'});
        } catch (e) {
        }
    }
}

