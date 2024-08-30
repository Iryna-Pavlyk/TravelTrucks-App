import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations.js';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
  },
  extraReducers: builder => {
    builder.addCase(
      fetchCampers.fulfilled,
      (state, action) => {
        state.items = action.payload;
      }
    );
  },
});

export default campersSlice.reducer;
