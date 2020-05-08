import cloneDeep from 'lodash/cloneDeep';

const initState = {
  dataForm: {
    login: '',
    password: ''
  },
  user: null,
  error: false
};

function merge(state, someObject) {
  const clonnedState = cloneDeep(state);

  return Object.assign(clonnedState, someObject);
}

export default function signInReducer(state = initState, action) {
  switch (action.type) {
    case 'SIGN-IN_CHANGE_DATA_FORM':
      return merge(state, {
        dataForm: {
          ...state.dataForm,
          [action.payload.fieldId]: action.payload.value.trim()
        }
      });
    case 'SIGN-IN_FAIL':
      return {
        ...state,
        error: true
      }
    case 'SIGN-IN_SUCCESS':
      return {
        dataForm: {
          login: '',
          password: ''
        },
        user: action.payload,
        error: false
      }
    case 'SIGN-IN_LEAVE_SUCCESS':
      return {
        ...initState
      }

    default:
      return state;
  }
}
