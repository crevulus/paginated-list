import styled from "styled-components";
import { calcColorBoundary } from "../../styles/theme";

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.lightGrey};
  border-bottom: 0;
  &:last-of-type {
    border-bottom: 1px solid ${(props) => props.theme.lightGrey};
  }
  &:hover {
    box-shadow: inset 0px 0px 4px 0px ${(props) => props.theme.blue};
    cursor: pointer;
  }
`;

export const StyledBasicInfo = styled.div`
  display: flex;
  justify-content: space-between;
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
  color: white;
`;

const Score = styled.span`
  border-radius: 5px;
  padding: 0.2rem;
  font-weight: 700;
`;

export const StyledTrustScore = styled(Score)<{ $value: number }>`
  background-color: ${(props) => calcColorBoundary(props.$value, 50, 75)};
`;

export const StyledRecentRevenue = styled(Score)<{ $value: number }>`
  background-color: ${(props) => calcColorBoundary(props.$value, 1000, 3000)};
`;
