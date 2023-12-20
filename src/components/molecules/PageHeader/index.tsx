import "./styles.scss"
import {SearchInput} from "../../atoms/SearchInput";
import {FC} from "react";

interface PageHeaderProps {
    label: string,
    filterFunction?: (value: string) => void
}

export const PageHeader: FC<PageHeaderProps> = (props) => {
    const {label, filterFunction} = props
    return (
        <div className="page-header page-header__navigator row">
            <p className="page-header__title">{label}</p>
            {!!filterFunction &&
                <SearchInput onChange={filterFunction}/>
            }
        </div>
    )
}