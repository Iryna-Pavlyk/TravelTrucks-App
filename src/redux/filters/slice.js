import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    type: [],
    equipment: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.location = action.payload;
      state.type = action.payload;
      state.equipment = action.payload;
    },
  },
});

export const filterReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
