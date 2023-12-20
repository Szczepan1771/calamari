import {useAppDispatch, useAppSelector} from "../reducers/hooks";
import {ID, RatingType} from "../types";
import {removeFromList} from "../reducers/slices/mySpecialistSlice";
import {addVote} from "../reducers/slices/allFavoriteSlice";
import {useCallback} from "react";

export const useMySpecialist = () => {
    const myList = useAppSelector(state => state.mySpecialist.data)
    const dispatch = useAppDispatch()
    return {
        myList,
        removeFromList: useCallback((id: ID) => {
            dispatch(removeFromList(id))
        }, []),
        handleAddRating: useCallback((id: ID, rating: RatingType) => {
            dispatch(addVote({id, vote: rating}))
        }, []),
    }
}