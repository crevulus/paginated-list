import React, { FormEvent, useContext, useState, useRef } from "react";
import GlobalContext from "../../data/GlobalContext";
import { ChannelType, FilterCountryOptions } from "../../data/types";
import { theme } from "../../styles/theme";
import {
  StyledDropdown,
  StyledFilters,
  StyledResetButton,
  StyledSearchButton,
  StyledSearchForm,
  StyledSearchInput,
  StyledSelectedCount,
} from "./Filters.styles";

export const Filters = () => {
  const [input, setInput] = useState("");
  const dropdownRef = useRef<HTMLSelectElement>(null);
  const { data, setResults, setResultsLength, selected } =
    useContext(GlobalContext);

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    const filteredData = data.filter((channel) =>
      channel.label.toLowerCase().includes(input)
    );
    setResults(filteredData);
    setResultsLength(filteredData.length);
    setInput("");
  };

  const handleDropdown = (event: any) => {
    const selection = event.target.value;
    let filteredData: ChannelType[];
    if (selection === "default") {
      filteredData = [];
    } else {
      filteredData = data.filter(
        (channel: ChannelType) => channel.country === event.target.value
      );
    }
    setResults(filteredData);
    setResultsLength(filteredData.length);
    setInput("");
  };

  // NOTE: Added a much-needed reset button
  const handleReset = () => {
    setResults([]);
    setResultsLength(0);
    // NOTE: There might be a better way to do this, e.g. react-select
    if (dropdownRef.current) {
      dropdownRef.current.value = "default";
    }
  };

  return (
    <StyledFilters>
      <StyledSearchForm onSubmit={handleSearch}>
        <StyledSearchInput
          type="text"
          placeholder="Search for channels e.g. Google"
          value={input}
          onChange={(event) => setInput(event.target.value.toLowerCase())}
        />
        <StyledSearchButton type="submit" $bgColor={theme.blue}>
          Search
        </StyledSearchButton>
      </StyledSearchForm>
      <StyledDropdown ref={dropdownRef} onChange={handleDropdown}>
        <option value="default">All countries</option>
        <option id={FilterCountryOptions.One} value={FilterCountryOptions.One}>
          {FilterCountryOptions.One}
        </option>
        <option id={FilterCountryOptions.Two} value={FilterCountryOptions.Two}>
          {FilterCountryOptions.Two}
        </option>
        <option
          id={FilterCountryOptions.Three}
          value={FilterCountryOptions.Three}
        >
          {FilterCountryOptions.Three}
        </option>
      </StyledDropdown>
      <StyledResetButton onClick={handleReset}>Reset Filters</StyledResetButton>
      {selected.length > 0 && (
        <StyledSelectedCount>{selected.length} selected</StyledSelectedCount>
      )}
    </StyledFilters>
  );
};
