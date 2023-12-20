import {FC} from "react";
import {ID, RatingType, SpecialistItem} from "../../../types";
import {AvatarComponent} from "../../atoms/AvatarComponent";
import "./styles.scss";
import {RatingComponent} from "../../molecules/RatingComponent";
import {ActionIcon} from "../../molecules/ActionIcon";
import {getInitials} from "../../../utils";

interface SpecialistTileProps extends SpecialistItem {
    isFavorite?: boolean
    handleAddRating?: (id: ID, value: RatingType) => void
    handleAddRemoveFavorite?: (id: ID) => void
}
export const SpecialistTile: FC<SpecialistTileProps> = (props) => {
    const {id, name, surname, rating, ratingTotalCount, specialization, photo, isVoted, handleAddRating, handleAddRemoveFavorite, isFavorite} = props

    return (
        <div className="specialist_tile column">
            <div className="specialist_tile__top-section row p20">
                <ActionIcon name="more_horiz" onClick={() => console.log("MORE HORIZON")}/>
                <ActionIcon isActive={isFavorite} name="favorite" onClick={() => handleAddRemoveFavorite?.(id)} size={24}/>
            </div>
            <AvatarComponent id={id} initials={getInitials(name, surname)} avatar={photo}/>
            <div className="specialist_tile__user-details column">
                <p className="specialist_tile__name">{name} {surname}</p>
                <p className="specialist_tile__specialization">{specialization}</p>
            </div>
            <div className="specialist_tile__action-section row">
                <ActionIcon variant="action" name="notifications" onClick={() => console.log("ADD NOTIFY")}/>
                <ActionIcon variant="action" name="calendar_today" onClick={() => console.log("ADD CALENDAR")}/>
                <ActionIcon variant="action" name="mail" onClick={() => console.log("ADD MAIL")}/>
            </div>
            <div className="specialist_tile__rating-section row p24">
                <RatingComponent onClick={(value) => handleAddRating?.(id, value)} rating={rating} isVoted={isVoted}/>
                <div className="specialist_tile__votes-wrapper column">
                    <p className="specialist_tile__rating-value">{rating.toFixed(1)}</p>
                    <p className="specialist_tile__votes">({ratingTotalCount})</p>
                </div>
            </div>
            <div className="specialist_tile__bottom-section row">
                <div className="specialist_tile__bottom-item row">
                    Profile
                </div>
                <div className="specialist_tile__bottom-item row">
                    Book a visit
                </div>
            </div>
        </div>
    )
}