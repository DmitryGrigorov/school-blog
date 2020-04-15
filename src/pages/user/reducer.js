const initState = {
    data: null,
    showModal: true
};

export default function userReducer(state = initState, action) {
    switch (action.type) {
        case 'USER_PAGE_GET_USER_SUCCESS':
            return {
                ...state,
                data: action.payload
            }
        case 'USER_PAGE_LEAVE':
            return {
                state: initState
            }
        case 'USER_PAGE_SHOW_MODAL':
            return {
                ...state,
                showModal: !state.showModal
            }

        default:
            return state;

    }
}