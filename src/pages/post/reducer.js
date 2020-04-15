import cloneDeep from "lodash/cloneDeep";

const initState = {
    data: null,
    dataForm: {
        title: '',
        content: '',
    }
};
function merge(state, someObject) {
    const clonnedState = cloneDeep(state);

    return Object.assign(clonnedState, someObject);
}
export default function postReducer(state=initState, action) {
    switch (action.type) {
        case 'POST_PAGE_GET_DATA_SUCCESS':
            return {
                ...state,
                data: action.payload,
                dataForm: {
                    title: action.payload.title,
                    content: action.payload.content
                }
            }
        case 'POST_PAGE_INCREASE_LIKE_SUCCESS':
            return {
                ...state,
                data: action.payload
            }
        case 'POST_PAGE_DECREASE_LIKE_SUCCESS':
            return {
                ...state,
                data: action.payload
            }
        case 'POST_PAGE_LEAVE':
            return initState;
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