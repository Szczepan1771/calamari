import {SpecialistTile} from "../../components/organisms/SpecialistTile";
import {PageHeader} from "../../components/molecules/PageHeader";
import {useAllFavorite} from "../../hooks/useAllFavorite";
import InfiniteScroll from 'react-infinite-scroller';

export const AllFavorite = () => {
    const {
        specialistList,
        favoriteIds,
        totalCount,
        handleAddRating,
        hasMore,
        handleAddRemoveFavorite,
        filterList,
        loadMore
    } = useAllFavorite()

    return (
        <div className="page-wrapper column">
            <PageHeader label={`Favorite specialist ${totalCount > 0 ? `(${totalCount})` : ""}`}
                        filterFunction={filterList}/>
            <InfiniteScroll
                className="list row"
                loadMore={loadMore}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
            >
                {specialistList.map(item => (
                    <SpecialistTile
                        key={`specialist-${item.id}`}
                        {...item}
                        isFavorite={favoriteIds.includes(item.id)}
                        handleAddRating={handleAddRating}
                        handleAddRemoveFavorite={handleAddRemoveFavorite}
                    />
                ))}
            </InfiniteScroll>
        </div>
    )
}