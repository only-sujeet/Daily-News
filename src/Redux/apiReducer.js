import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    data: [],
    error: null,
    loading: false
}

export const getNewsApi = createAsyncThunk(
    'APIs/getNews', // action type prefix
    async ({ country, category, apiKey, page, pageSize }, { rejectWithValue }) => { // destructure correctly
        try {
            const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`);
            return data;
        } catch (error) {
            // Use rejectWithValue to provide additional information on failure
            return rejectWithValue(error.response.data);
        }
    }
);

const apiSlice = createSlice({
    name: "APIs",
    initialState: initialState,
    reducers: {
        clearData: (state) => {
            state.error = null;
            state.data = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNewsApi.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getNewsApi.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(getNewsApi.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
    }
})

export const {clearData} = apiSlice.actions
export default apiSlice.reducer