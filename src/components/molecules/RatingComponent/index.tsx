import "./styles.scss"
import {FC, memo, useState} from "react";
import {RatingType} from "../../../types";
import {Icon} from "../../atoms/Icon";

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
                    key={`rating-${index}`}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(Math.round(0))}
                    onClick={() => !isVoted && onClick(index + 1 as RatingType)}
                    data-testid="rating-item"
                    className={`rating-item ${!isVoted ? (hover <= (index) ? ""  : "active") : (Math.round(rating) <= index ? ""  : "active")}`}
                >
                    <Icon name="star" />
                </div>
            ))}
        </div>
    )
})