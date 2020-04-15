import cloneDeep from 'lodash/cloneDeep';

const initState = {
    dataForm: {
        currentPassword: '',
        newPassword: ''
    },
    error: {
        currentPassword: '',
        newPassword: ''
    }
};

function mapErrorFromServer(errorFromServer) {
    const errorCode = Object.keys(errorFromServer)[0];
    switch (errorCode) {
        case 'isRequired':
            return 'Заполните данное поле';
        case 'unique':
            return 'Такое имя уже существует';
        case 'minLength':
            return 'Длина должна быть больше ' + errorFromServer[errorCode];
        default:
            return errorCode;

    }
}
function merge(state, someObject) {
    const clonnedState = cloneDeep(state);

    return Object.assign(clonnedState, someObject);
}

function getFormErrors(payload) {
    const errorKeys = Object.keys(payload);
    const errors = errorKeys.reduce(function (result, errorKey) {
        console.log(result)
        const errorFromServer = payload[errorKey];
        result[errorKey] = mapErrorFromServer(errorFromServer);
        console.log(errorFromServer)
        return result
    }, {})
    return errors;
}

export default function changePasswordReducer(state = initState, action) {
    switch (action.type) {
        case 'MODAL_CHANGE_DATA_FORM':
            return merge(state, {
                dataForm: {
                    ...state.dataForm,
                    [action.payload.fieldId]: action.payload.value.trim()
                }
            });
        case 'MODAL_CHANGE_PASSWORD_SUCCESS':
        {
            if(Object.keys(action.payload)[0]==='success'){
                return initState;
            }
            if(Object.keys(action.payload)[0]==='error'){
                return {
                    ...state,
                    error: {currentPassword: 'Неверный текущий пароль'}
                }
            }
        }
        case 'MODAL_LEAVE':
            return initState;
        case 'MODAL_CHANGE_PASSWORD_FAIL':
            return {
                ...state,
                error: getFormErrors(action.payload)
            }
        default:
            return state;
    }
}