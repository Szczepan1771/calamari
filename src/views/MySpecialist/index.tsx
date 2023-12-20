import {PageHeader} from "../../components/molecules/PageHeader";
import {SpecialistTile} from "../../components/organisms/SpecialistTile";
import {useMySpecialist} from "../../hooks/useMySpecialist";

export const MySpecialist = () => {
    const {myList, removeFromList} = useMySpecialist()
    return (
        <div className="page-wrapper">
            <PageHeader label={`My Specialist ${myList.length > 0 ? `(${myList.length})` : ""}`}/>
            <div className="list row">
                {myList.map(item => (
                    <SpecialistTile key={item.id} {...item} handleAddRemoveFavorite={removeFromList} isFavorite={true}/>
                ))}
            </div>
        </div>
    )
}