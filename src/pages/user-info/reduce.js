import cloneDeep from 'lodash/cloneDeep'

const initState = {
    userInfo: null,
    dataForm: {
        currentPassword: '',
        newPassword: '',
    },
    errors: {
        currentPassword: '',
        newPassword: '',
    }
}
function merge(state, someObject) {
    const clonnedState = cloneDeep(state);
  
    return Object.assign(clonnedState, someObject);
  };

function mapErrorFromServer(errorFromServer) {
    const errorCode = Object.keys(errorFromServer)[0];

    switch (errorCode) {
        case 'isRequired':
            return 'Поле обязательно для заполнения';
        case 'minLength':
            return 'Пароль должен быть длиннее 3 символов';
        default:
            return errorCode;
    }
}

function getFormErrors(payload) {

    const errorKeys = Object.keys(payload);
    const errors = errorKeys.reduce(function (result, errorKey) {
        const errorFromServer = payload[errorKey]
        result[errorKey] = mapErrorFromServer(errorFromServer)
        return result;
    }, {});

    return errors;
}

export default function userInfoReducer(state = initState, action) {
    switch (action.type) {
        case 'USER-INFO_GET_USER_INFO_SUCCESS':
            return {
                ...state,
                userInfo: action.payload
            }
        case 'USER-INFO_CHANGE_DATAFORM':
            return merge(state, {
                dataForm: {
                    ...state.dataForm,
                    [action.payload.fieldId]: action.payload.value
                }
            })
        case 'USER-INFO_CHANGE_PASSWORD_SUCCESS':
            return {
                ...state,
                errors: {
                    ...state.errors,
                    currentPassword: action.payload.error || action.payload.error ? 'Введен неправильный пароль' : '',
                }
            }
        case 'USER-INFO_CHANGE_PASSWORD_FAIL':
            return {
                ...state,
                errors: getFormErrors(action.payload)
            };
        default:
            return state;
    }
}