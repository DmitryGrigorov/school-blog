import cloneDeep from 'lodash/cloneDeep';

const initState = {
    dataForm: {
        login: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
    },
    errors: {
        login: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
}
};
function mapErrorFromServer(errorFromServer) {
    const errorCode = Object.keys(errorFromServer)[0];
    switch (errorCode) {
        case 'isRequired':
            return 'Заполните данное поле';
        case 'unique':
            return 'Такое имя уже существует';
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

export default function signUpReducer(state = initState, action) {
    switch (action.type) {
        case 'SIGN-UP_CHANGE_DATA_FORM':
            return merge(state, {
                dataForm: {
                    ...state.dataForm,
                    [action.payload.fieldId]: action.payload.value.trim()
                }
            });
        case 'SIGN-UP_CHECK_LOGIN_SUCCESS':
            return {
                ...state,
                errors: {
                    ...state.errors,
                    login: action.payload.exists ? 'Такой логин уже занят' : ''
                }
            }
        case 'SIGN-UP_FAIL':
            return {
                ...state,
                errors: getFormErrors(action.payload)
            }
        case 'SIGN-UP_SUCCESS':
        case 'SIGN-UP_LEAVE_SUCCESS':
            return {
                ...initState
            }

        default:
            return state;
    }
}
