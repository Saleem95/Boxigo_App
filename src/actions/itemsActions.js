export const fetchItemsPending = () => ({
    type: 'FETCH_ITEMS_PENDING',
});

export const fetchItemsSuccess = (items) => ({
    type: 'FETCH_ITEMS_SUCCESS',
    payload: items,
});

export const fetchItemsFailure = (error) => ({
    type: 'FETCH_ITEMS_FAILURE',
    error,
});

export const fetchItems = () => async (dispatch) => {
    dispatch(fetchItemsPending());
    try {
        const response = await fetch('http://test.api.boxigo.in/sample-data/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched Data:', data);
        dispatch(fetchItemsSuccess(data.Customer_Estimate_Flow));
    } catch (error) {
        dispatch(fetchItemsFailure(error.message));
    }
};
