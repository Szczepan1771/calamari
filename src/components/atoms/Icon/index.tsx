import {FC, memo} from "react";
import {IconSizeType, IconType} from "../../../types";

interface IconProps {
    name: IconType
    size?: IconSizeType
}
export const Icon: FC<IconProps> = memo((props) => {
    const {name, size = 20} = props
    return (
        <span className={`material-icons md-${size}`}>{name}</span>
    )
})