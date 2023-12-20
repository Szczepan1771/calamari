import {configureStore} from "@reduxjs/toolkit";
import allFavoriteReducer from "./slices/allFavoriteSlice";
import mySpecialistReducer from "./slices/mySpecialistSlice";

export const store = configureStore({
    reducer: {
        allFavorite: allFavoriteReducer,
        mySpecialist: mySpecialistReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch