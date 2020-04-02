const initState = {
  userData: {},
  isLoading: false,
  dataForm: {
    currentPassword: "",
    newPassword: ""
  }
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case "FETCH_USER_DATA_REQUEST":
      return { ...state, isLoading: true };
    case "FETCH_USER_DATA_SUCCESS":
      return { ...state, isLoading: false, userData: action.payload };
    case "MODAL_CHANGE_DATA_FORM":
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
