import React from "react";
import { StyledCheckbox, StyledLabel } from "./Checkbox.styles";

type CheckboxPropsType = {
  label: string;
  id: string;
};

const Checkbox = ({ label, id }: CheckboxPropsType) => {
  return (
    <>
      <StyledCheckbox type="checkbox" id={id} />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </>
  );
};

export default Checkbox;
