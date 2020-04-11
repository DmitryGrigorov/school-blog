
const initState = {
    data: null
}

export default function postReducer (state = initState, action) {
    switch (action.type) {
        case 'POST_PAGE_GET_DATA_SUCCES':
            return {
                ...state
            }
        default:
            return state
    }
}
