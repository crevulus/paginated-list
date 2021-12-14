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

export const StyledNumberButton = styled(Button)<{ disabled: boolean }>`
  padding: 0.5rem;
  width: 1.8rem;
  &:hover {
    ${(props) => !props.disabled && "transform: translateY(-5px)"};
  }
`;
