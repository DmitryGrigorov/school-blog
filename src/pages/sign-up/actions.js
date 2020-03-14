export const changeFieldAction = ({fieldId, value}) => {
  return {
    type: "SIGN-UP_CHANGE_FIELD",
    payload: ({fieldId, value})
  };
};
