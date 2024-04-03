import { createSlice } from "@reduxjs/toolkit";

const Lists = createSlice({
    name: 'Lists',
    initialState: {
        value: [],
    },
    reducers: {
        setLists(state, {payload}) {
            state.value = payload;
        },
    }
})

export const { setLists } = Lists.actions;

export default Lists.reducer;