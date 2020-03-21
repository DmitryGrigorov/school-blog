const initialState = {
  dataForm: {
    login: "",
    nameField: "",
    email: "",
    password: ""
  }
};

export default function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN-UP_CHANGE_FIELD":
      return {
        ...state,
        dataForm: {
          ...state.dataForm,
          [action.payload.fieldId]: action.payload.value
        }
      };
    default:
      return state;
  }
}
