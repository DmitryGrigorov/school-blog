const initialState = {
  title: "",
  body: ""
};

export default function newPostReducer(state = initialState, action) {
  switch (action.type) {
    case "NEW_POST_FORM":
      return { ...state, [action.payload.fieldId]: action.payload.value };
    default:
      return state;
  }
}
