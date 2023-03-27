import { createSlice } from "@reduxjs/toolkit";

let initalizestate = { names: "", channelname: [] };

let oneslice = createSlice({
  name: "xyz",
  initialState: initalizestate,
  reducers: {
    data(state, action) {
      state.names = action.payload;
    },
    channel(state, action) {
      state.channelname.push(action.payload);
    },
  },
});

export let uiaction = oneslice.actions;
export default oneslice;
