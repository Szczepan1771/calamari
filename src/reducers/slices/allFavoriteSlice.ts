import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {specialistList} from "../../mocks";
import {ID, SpecialistItem} from "../../types";
import {PAGE_SIZE} from "../../utils";

interface AllFavoriteState {
    data: SpecialistItem[],
    filteredData: SpecialistItem[]
    totalCount: number
    votedIds: ID[]
}

const initialState: AllFavoriteState = {
    totalCount: specialistList.length,
    data: specialistList.slice(0, PAGE_SIZE),
    filteredData: specialistList,
    votedIds: [],
}

export const allFavoriteSlice = createSlice({
    name: "ALL_FAVORITE",
    initialState,
    reducers: {
        filterList: (state, action: PayloadAction<string>) => {
            const filteredList = specialistList.filter(item => `${item.name} ${item.surname}`.toLowerCase().includes(action.payload.toLowerCase()))
            state.filteredData = filteredList;
            state.data = filteredList.slice(0, PAGE_SIZE)
            state.totalCount = filteredList.length
        },
        addVote: (state, action: PayloadAction<{ id: ID, vote: number }>) => {
            state.votedIds = [...state.votedIds, action.payload.id]
            state.data = state.data.map(item => {
                if(!item.isVoted && item.id === action.payload.id) {
                    return {
                        ...item,
                        ratingTotalCount: item.ratingTotalCount + 1,
                        rating: Number((((item.rating * item.ratingTotalCount) + action.payload.vote) / (item.ratingTotalCount + 1)).toFixed(1)),
                        isVoted: true
                    }
                }
                return item
            })
        },
        loadMore: (state, action: PayloadAction<number>) => {
            const newData = state.filteredData.slice(action.payload * PAGE_SIZE, (action.payload + 1) * PAGE_SIZE)
            state.data = [...new Set([...state.data, ...newData])]
        }
    }
})

export const {filterList, addVote, loadMore} = allFavoriteSlice.actions

export default allFavoriteSlice.reducer