import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMoveDetails = createAsyncThunk(
    'moveDetails/fetchMoveDetails',
    async () => {
        try {
            const response = await axios.get('http://test.api.boxigo.in/sample-data/');
            return response.data.Customer_Estimate_Flow;
        } catch (error) {
            throw new Error('Failed to fetch move details');
        }
    }
);

const moveDetailsSlice = createSlice({
    name: 'moveDetails',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMoveDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMoveDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchMoveDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default moveDetailsSlice.reducer;
