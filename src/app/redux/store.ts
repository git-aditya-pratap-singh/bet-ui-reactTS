import { configureStore } from "@reduxjs/toolkit";
import StateSlice from "./slices/StateSlice";

const store = configureStore({
    reducer : {
        centerliazedStore : StateSlice.reducer
    }
})
export default store;