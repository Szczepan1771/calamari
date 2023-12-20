import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ID, SpecialistItem} from "../../types";

interface MySpecialistState {
    data: SpecialistItem[],
    ids: ID[]
}

const initialState: MySpecialistState = {
    data: [],
    ids: []
}

export const mySpecialistSlice = createSlice({
    name: "MY SPECIALIST",
    initialState,
    reducers: {
        addToList: (state, action: PayloadAction<SpecialistItem>) => {
            state.data = [...state.data, action.payload]
            state.ids = [...state.ids, action.payload.id]
        },
        removeFromList: (state, action: PayloadAction<ID>) => {
            state.data = state.data.filter(item => item.id !== action.payload)
            state.ids = state.ids.filter(id => id !== action.payload)
        }
    }
})

export const {addToList, removeFromList} = mySpecialistSlice.actions

export default mySpecialistSlice.reducer