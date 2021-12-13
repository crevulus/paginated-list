import React from "react";
import { ChannelType } from "../../data/types";
import Checkbox from "../Checkbox/Checkbox";
import {
  StyledCard,
  StyledScores,
  StyledTrustScore,
  StyledRecentRevenue,
} from "./Card.styles";

type CardPropsType = {
  channel: ChannelType;
};

export const Card = ({ channel }: CardPropsType) => {
  return (
    <StyledCard>
      <Checkbox label={channel.label} id={channel.key} />
      <StyledScores>
        <StyledRecentRevenue $value={channel.recentRevenue}>
          $ {channel.recentRevenue}
        </StyledRecentRevenue>
        <StyledTrustScore $value={channel.trustScore}>
          {channel.trustScore}%
        </StyledTrustScore>{" "}
      </StyledScores>
    </StyledCard>
  );
};
