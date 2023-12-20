import "./styles.scss"
import {FC, memo, useState} from "react";
import {ActionIcon} from "../ActionIcon";
import {RatingType} from "../../../types";

interface RatingComponentProps {
    rating: number
    isVoted: boolean
    onClick: (value: RatingType) => void
}

const MAX_RATING = 5

export const RatingComponent: FC<RatingComponentProps> = memo((props) => {
    const {rating, onClick, isVoted} = props
    const [hover, setHover] = useState(0)

    return (
        <div className="rating-wrapper row">
            {Array.from({length: MAX_RATING}).map((_, index) => (
                <div
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(Math.round(0))}
                    key={`rating-${index}`}
                    className={`rating-item ${!isVoted ? (hover <= (index) ? ""  : "active") : (Math.round(rating) <= index ? ""  : "active")}`}
                >
                    <ActionIcon name="star" onClick={() => onClick(index + 1 as RatingType)}/>
                </div>
            ))}
        </div>
    )
})