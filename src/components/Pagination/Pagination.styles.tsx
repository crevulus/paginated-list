import styled from "styled-components";
import { Button } from "../../styles/globalStyles";

export const StyledPagination = styled.div``;

export const StyledList = styled.ul`
  padding: 0;
`;

export const StyledButtonsContainer = styled.div``;

export const StyledNavigationButton = styled(Button)`
  margin: 0 1rem;
`;

// NOTE: Hardcoded width to match the widest button when dimesnions were fully dynamic.
export const StyledNumberButton = styled(Button)<{ disabled: boolean }>`
  padding: 0.5rem;
  width: 2rem;
  &:hover {
    ${(props) => !props.disabled && "transform: translateY(-5px)"};
  }
`;
