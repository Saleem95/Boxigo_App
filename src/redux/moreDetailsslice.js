import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMoreDetails = createAsyncThunk(
    'moreDetails/fetchMoreDetails',
    async () => {
        const response = await axios.get('http://test.api.boxigo.in/sample-data/');
        return response.data.Customer_Estimate_Flow;
    }
);

const moreDetailsSlice = createSlice({
    name: 'moreDetails',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMoreDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMoreDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchMoreDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default moreDetailsSlice.reducer;
