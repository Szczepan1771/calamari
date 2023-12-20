import {Icon} from "../Icon";
import "./styles.scss"
import {FC, InputHTMLAttributes, memo} from "react";

interface SearchInputInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    onChange?: (value: string) => void
}

export const SearchInput: FC<SearchInputInputProps> = memo(({onChange, ...restProps}) => {
    return (
        <div className="search">
            <Icon name="search"/>
            <input
                {...restProps}
                onChange={(evt) => onChange?.(evt.target.value)}
                type="text"
                placeholder="Search..."
            />
        </div>
    )
})