import styled from "styled-components";
import { Button } from "../../styles/globalStyles";

// NOTE: gap doesn't work on Safari, I know
export const StyledFilters = styled.div`
  display: grid;
  grid-template-columns: 40% repeat(3, 1fr);
  gap: 1rem;
  align-items: center;
  jutify-content: space-around;
  justify-items: left;
`;

export const StyledSearchForm = styled.form`
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

export const StyledSearchInput = styled.input`
  flex: 1;
  border: 1px solid ${(props) => props.theme.lightGrey};
  border-radius: 5px;
  box-sizing: border-box;
  height: 100%;
`;

export const StyledDropdown = styled.select`
  border: 1px solid ${(props) => props.theme.lightGrey};
  border-radius: 5px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
`;

export const StyledSearchButton = styled(Button)``;

export const StyledResetButton = styled(Button)`
  justify-self: center;
`;

export const StyledSelectedCount = styled.span`
  justify-self: center;
  color: ${(props) => props.theme.blue};
  font-weight: 700;
`;
