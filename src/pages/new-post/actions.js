export function changeDataAction(fieldId, value) {
  return {
    type: 'NEW_POST_DATA_CHANGE',
    payload: {
      fieldId,
      value
    }
  }
}