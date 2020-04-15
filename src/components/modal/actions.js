import API from 'src/api'

export const changeFieldAction = ({fieldId, value}) => ({
        type: 'MODAL_CHANGE_DATA_FORM',
    payload: {fieldId, value}
});
export const changePasswordAction = (data) => {
    return async function(dispatch) {
        try {
            dispatch({type:'MODAL_CHANGE_PASSWORD_REQUEST'});
            const response = await API.users.changePassword(data);
            dispatch({type: 'MODAL_CHANGE_PASSWORD_SUCCESS', payload: response.data});
        } catch (e) {
            dispatch({type: 'MODAL_CHANGE_PASSWORD_FAIL', payload: e.response.data});
        }
    }
};
export const leavePageAction = () => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MODAL_LEAVE'});
        } catch (e) {
        }
    }
}

