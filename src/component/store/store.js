import { configureStore } from "@reduxjs/toolkit";
import oneslice from "./config";

let store = configureStore({ reducer: { one: oneslice.reducer } });
export default store