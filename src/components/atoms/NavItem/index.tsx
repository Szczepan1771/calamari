import {NavLink} from "react-router-dom"
import {NavLinkToType} from "../../../types";
import {FC, memo} from "react";
import "./styles.scss"

interface NavItemProps {
    to: NavLinkToType
    label: string
}

export const NavItem: FC<NavItemProps> = memo((props) => {
    const {to, label} = props
    return (
        <NavLink to={to} className="nav-item row">
            {label}
        </NavLink>
    )
})