import {NavItemType} from "../../../types";
import {FC} from "react";
import {NavItem} from "../../atoms/NavItem";
import "./styles.scss";

interface NavigationProps {
    config: NavItemType[]
}
export const Navigation: FC<NavigationProps> = (props) => {
    const {config} = props
    return (
        <div className="navigation row">
            {config.map(item => (
                <NavItem key={item.label} {...item}/>
            ))}
        </div>
    )
}