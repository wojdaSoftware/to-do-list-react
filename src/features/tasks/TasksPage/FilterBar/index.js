import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Input, Wrapper } from "../Form/styled";

const FilterBar = () => {
    const [filterText, setFilterText] = useState("");
    const history = useHistory();

    const handleInputChange = (event) => {
        setFilterText(event.target.value);
        history.push(`?filter=${event.target.value}`);
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
                onChange={handleInputChange}
            />
        </Wrapper>
    );
};

export default FilterBar;