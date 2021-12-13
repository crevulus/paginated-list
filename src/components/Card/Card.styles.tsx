import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: 100%;
  border: 1px solid ${(props) => props.theme.lightGrey};
  border-bottom: 0;
  &:last-of-type {
    border-bottom: 1px solid ${(props) => props.theme.lightGrey};
  }
`;

export const StyledScores = styled.span`
  display: flex;
  justify-content: space-between;
  min-width: 10rem;
`;

export const StyledTrustScore = styled.span<{ $value: number }>`
  color: ${(props) =>
    props.$value > 50 ? props.theme.highColor : props.theme.lowColor};
`;

export const StyledRecentRevenue = styled.span<{ $value: number }>`
  color: ${(props) =>
    props.$value > 1000 ? props.theme.highColor : props.theme.lowColor};
`;
