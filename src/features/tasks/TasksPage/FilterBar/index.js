import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Input, Wrapper } from "../Form/styled";
import searchQueryParamName from "../../searchQueryParamName";

const FilterBar = () => {
    const [filterText, setFilterText] = useState("");
    const history = useHistory();

    const onInputChange = (event) => {
        setFilterText(event.target.value);
        history.push(`?${searchQueryParamName}=${event.target.value}`);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Wrapper onSubmit={onFormSubmit}>
            <Input
                noMargin
                placeholder="Filter tasks"
                value={filterText}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};

export default FilterBar;