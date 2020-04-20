import cloneDeep from 'lodash/cloneDeep';

const initState = {
  dataForm: {
    title: '',
    textbody: '',
  }
};

function merge(state, someObject) {
  const clonnedState = cloneDeep(state);

  return Object.assign(clonnedState, someObject);
}

export default function newPostOldReducer(state = initState, action) {
  switch (action.type) {
    case 'NEW-POST_CHANGE_DATA_FORM':
      return merge(state, {
        dataForm: {
          ...state.dataForm,
          [action.payload.fieldId]: action.payload.value
        }
      });
    default:
      return state;
  }
}