import API from "../../api";
import {push} from "connected-react-router";


export const changeFieldAction = ({fieldId, value}) => ({
    type: 'SIGN-UP_CHANGE_DATA_FORM',
    payload: {fieldId, value}
});

export const leaveSignUpAction = () => {
    return async function (dispatch) {
        try {
            dispatch({type: 'SIGN-UP_LEAVE_SUCCESS'});
        } catch (error) {
            dispatch({type: 'SIGN-UP_LEAVE_FAIL', payload: error.response.data});
        }
    }
}

export const signUpAction = (dataForm) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'SIGN-UP_REQUEST'});
            const response = await API.users.signUp(dataForm);
            dispatch({type: 'SIGN-UP_SUCCESS', payload: response.data});
            dispatch(push('/'));
        } catch (error) {
            dispatch({type: 'SIGN-UP_FAIL', payload: error.response.data});
        }
    }
};

export const checkLoginAction = (login) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'SIGN-UP_CHECK_LOGIN_REQUEST'});
            const response = await API.users.checkLogin(login);
            dispatch({type: 'SIGN-UP_CHECK_LOGIN_SUCCESS', payload: response.data});
        } catch (error) {
            dispatch({type: 'SIGN-UP_CHECK_LOGIN_FAIL'})
        }
    }
}



