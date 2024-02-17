import { useState } from "react";
import { Input, Wrapper } from "../Form/styled";
import searchQueryParamName from "../../searchQueryParamName";
import { useReplaceQueryParameter } from "../../queryParameters";

const FilterBar = () => {
    const [filterText, setFilterText] = useState("");
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({target}) => {
        setFilterText(target.value);

        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : "",
        });
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