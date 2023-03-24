import { createSlice } from "@reduxjs/toolkit";

let initalizestate = { names: "" };

let oneslice = createSlice({
  name: "xyz",
  initialState: initalizestate,
  reducers: {
    data(state, action) {
      state.names = action.payload;
      
    },
  },
});


export let uiaction = oneslice.actions;
export default oneslice;
