import React, { useState } from "react";
import { ChannelType } from "../../data/types";
import Checkbox from "../Checkbox/Checkbox";
import {
  StyledCard,
  StyledTrustScore,
  StyledRecentRevenue,
  StyledBasicInfo,
  StyledExpandedInfo,
  StyledCaretIcon,
} from "./Card.styles";

type CardPropsType = {
  channel: ChannelType;
};

export const Card = ({ channel }: CardPropsType) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    // NOTE: not a button; bad a11y
    <StyledCard onClick={() => setIsExpanded(!isExpanded)}>
      <StyledBasicInfo>
        <Checkbox
          label={channel.label}
          country={channel.country}
          id={channel.key}
        />
        <StyledRecentRevenue $value={channel.recentRevenue}>
          $ {channel.recentRevenue}
        </StyledRecentRevenue>
        <StyledTrustScore $value={channel.trustScore}>
          {channel.trustScore}%
        </StyledTrustScore>{" "}
        <StyledCaretIcon $isExpanded={isExpanded} />
      </StyledBasicInfo>
      {isExpanded && (
        <StyledExpandedInfo>
          <p>Stats</p>
          <p>Graphs</p>
          <p>Information</p>
        </StyledExpandedInfo>
      )}
    </StyledCard>
  );
};
