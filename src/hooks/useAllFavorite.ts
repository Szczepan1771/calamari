import {ID, RatingType} from "../types";
import {useAppDispatch, useAppSelector} from "../reducers/hooks";
import {filterList, addVote, loadMore} from "../reducers/slices/allFavoriteSlice";
import {addToList, removeFromList} from "../reducers/slices/mySpecialistSlice";
import {useCallback, useEffect, useState} from "react";
import {PAGE_SIZE} from "../utils";

export const useAllFavorite = () => {
    const specialistList = useAppSelector(state => state.allFavorite.data)
    const totalCount = useAppSelector(state => state.allFavorite.totalCount)
    const favoriteIds = useAppSelector(state => state.mySpecialist.ids)
    const dispatch = useAppDispatch()
    const [pageNumber, setPageNumber] = useState(1)
    const [hasMore, setHasMore] = useState(pageNumber * PAGE_SIZE <= totalCount)

    useEffect(() => {
        setHasMore(pageNumber * PAGE_SIZE <= totalCount)
    }, [pageNumber, totalCount])

    return {
        handleAddRating: useCallback((id: ID, rating: RatingType) => {
            dispatch(addVote({id, vote: rating}))
        },[]),
        handleAddRemoveFavorite: useCallback((id: ID) => {
            if(!favoriteIds.includes(id)) {
                const specialist = specialistList.find(item => item.id === id)
                if(specialist) {
                    dispatch(addToList(specialist))
                }
            } else {
                dispatch(removeFromList(id))
            }
        }, []),
        filterList: useCallback((searchValue: string) => {
            dispatch(filterList(searchValue))
            setPageNumber(1)
        }, []),
        loadMore: useCallback(async () => {
            if(hasMore) {
                dispatch(loadMore(pageNumber))
                setPageNumber(prev => prev + 1)
            }
        }, [hasMore, pageNumber]),
        specialistList,
        favoriteIds,
        totalCount,
        hasMore
    }
}