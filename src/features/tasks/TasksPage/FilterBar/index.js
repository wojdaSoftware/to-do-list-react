import { useState } from "react";
import { Input, Wrapper } from "../Form/styled";

const FilterBar = () => {
  const [filterText, setFilterText] = useState("");

  return (
    <Wrapper>
        <Input
            value={filterText}
            onChange={(event) => setFilterText(event.target.value)}
        />
    </Wrapper>
);
};

export default FilterBar;