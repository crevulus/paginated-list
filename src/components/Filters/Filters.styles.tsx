import styled from "styled-components";
import { Button } from "../../styles/globalStyles";

// NOTE: gap doesn't work on Safari, I know
export const StyledFilters = styled.div`
  display: grid;
  grid-template-columns: 33% repeat(3, 1fr);
  gap: 1rem;
`;

export const StyledResetButton = styled(Button)``;
