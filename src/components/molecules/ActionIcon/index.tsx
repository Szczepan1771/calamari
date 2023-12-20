import {IconSizeType, IconType} from "../../../types";
import {FC, memo} from "react";
import {Icon} from "../../atoms/Icon";
import "./styles.scss"

interface ActionIconProps {
    name: IconType
    onClick: () => void
    variant?: "action" | "basic"
    size?: IconSizeType,
    isActive?: boolean
}

export const ActionIcon: FC<ActionIconProps> = memo((props) => {
    const {name, onClick, variant = "basic", isActive, size = 20} = props
    return (
        <div onClick={onClick} className={`${variant === "basic" ? "" : "action"} ${isActive ? "selected" : ""}`}>
            <Icon name={name} size={size}/>
        </div>
    )
})