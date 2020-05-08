import API from "src/api";
import {push} from 'connected-react-router';


export const changeFieldAction = ({fieldId, value}) => ({
    type: 'SIGN-IN_CHANGE_DATA_FORM',
    payload: {fieldId, value}
});

export const leaveSignInAction = () => {
    return async function (dispatch) {
        try {
            dispatch({type: 'SIGN-IN_LEAVE_SUCCESS'});
        } catch (error) {
            dispatch({type: 'SIGN-IN_LEAVE_FAIL', payload: error.response.data});
        }
    }
}


export const signInAction = (dataForm) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'SIGN-IN_REQUEST'});
            const response = await API.users.signIn(dataForm);
            dispatch({type: 'SIGN-IN_SUCCESS', payload: response.data});
            dispatch(push('/'));
        } catch (e) {
            dispatch({type: 'SIGN-IN_FAIL', payload: e.data});
        }


    }
};
