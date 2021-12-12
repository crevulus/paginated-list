import React from "react";
import { ChannelType } from "../../data/types";
import Checkbox from "../Checkbox/Checkbox";
import { StyledCard } from "./Card.styles";

type CardPropsType = {
  channel: ChannelType;
};

export const Card = ({ channel }: CardPropsType) => {
  return (
    <StyledCard>
      <Checkbox label={channel.label} id={channel.key} />
      <p>{channel.country}</p>
    </StyledCard>
  );
};
