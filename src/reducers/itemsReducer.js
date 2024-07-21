const initialState = {
    items: [],
    status: 'idle',
    error: null,
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ITEMS_PENDING':
            return {
                ...state,
                status: 'loading',
            };
        case 'FETCH_ITEMS_SUCCESS':
            return {
                ...state,
                items: action.payload,
                status: 'succeeded',
                error: null,
            };
        case 'FETCH_ITEMS_FAILURE':
            return {
                ...state,
                status: 'failed',
                error: action.error,
            };
        default:
            return state;
    }
};

export default itemsReducer;
