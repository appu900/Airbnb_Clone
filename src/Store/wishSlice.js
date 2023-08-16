import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const wishSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addTowishList(state,action){
      state.push(action.payload)
    }
  }
});

export const { addTowishList } = wishSlice.actions;
export default wishSlice.reducer;


