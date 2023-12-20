import {FC, memo, useMemo} from "react";
import {ID} from "../../../types";
import "./styles.scss"

interface AvatarComponentProps {
    id: ID
    initials: string
    avatar?: string
}
export const AvatarComponent: FC<AvatarComponentProps> = memo((props) => {
    const {avatar, initials, id} = props

    const content = useMemo(() => {
        if(avatar) {
            return <img className="avatar__image" src={avatar} alt={`avatar-${id}`}/>
        }

        return <p className="avatar__initials">{initials}</p>
    } , [props])

    return (
        <div className="avatar">
            {content}
        </div>
    )
})