import styled from "styled-components";
import { calcColorBoundary } from "../../styles/theme";
import { ReactComponent as CaretIcon } from "../../assets/caret-icon.svg";

export const StyledCard = styled.li`
  list-style-type: none;
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.lightGrey};
  border-bottom: 0;
  background-color: white;
  transition: 0.2s;
  &:first-of-type {
    border-radius: 5px 5px 0 0;
  }
  &:last-of-type {
    border-radius: 0 0 5px 5px;
    border-bottom: 1px solid ${(props) => props.theme.lightGrey};
  }
  &:hover {
    box-shadow: inset 0px 0px 4px 0px ${(props) => props.theme.blue};
    cursor: pointer;
  }
`;

export const StyledBasicInfo = styled.div`
  display: grid;
  grid-template-columns: 75% repeat(2, 10%) 5%;
  align-items: center;
`;

export const StyledExpandedInfo = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: ${(props) => props.theme.fontSizeLarge};
`;

export const StyledScores = styled.span`
  display: flex;
  justify-content: space-between;
  min-width: 10rem;
`;

const Score = styled.span`
  justify-self: left;
  border-radius: 5px;
  padding: 0.2rem;
  font-weight: 700;
`;

// IMPROVE: Could do one calc here rather than two
export const StyledTrustScore = styled(Score)<{ $value: number }>`
  border: 2px solid ${(props) => calcColorBoundary(props.$value, 50, 75)};
  color: ${(props) => calcColorBoundary(props.$value, 50, 75)};
`;

export const StyledRecentRevenue = styled(Score)<{ $value: number }>`
  border: 2px solid ${(props) => calcColorBoundary(props.$value, 1000, 3000)};
  color: ${(props) => calcColorBoundary(props.$value, 1000, 3000)};
`;

export const StyledCaretIcon = styled(CaretIcon)<{ $isExpanded: boolean }>`
  justify-self: right;
  fill: ${(props) => props.theme.magenta};
  transition: 0.2s;
  ${(props) => props.$isExpanded && "transform: rotate(180deg)"}
`;
