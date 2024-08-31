import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCamperById,
  fetchCampers,
} from './operations.js';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    camperById: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(
        fetchCamperById.fulfilled,
        (state, action) => {
          state.camperById = action.payload;
        }
      );
  },
});

export default campersSlice.reducer;
